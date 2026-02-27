import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

// =====================================================
// Styled Components
// =====================================================

const Container = styled.div`
  padding: 24px;
  background: #f5f7fb;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${({ variant }) => (variant === "secondary" ? "#e5e7eb" : "#4f46e5")};
  color: ${({ variant }) => (variant === "secondary" ? "#111" : "#fff")};
  &:hover {
    opacity: 0.9;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const StatValue = styled.h3`
  margin: 0;
`;

const Filters = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f3f4f6;
  font-size: 13px;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  background: ${({ status }) =>
    status === "ACTIVE" ? "#dcfce7" : status === "EXPIRED" ? "#fee2e2" : "#e0e7ff"};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 500px;
  max-width: 90%;
`;

const FormGroup = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

// =====================================================
// Mock Data Generator
// =====================================================

const statuses = ["ACTIVE", "EXPIRED", "SCHEDULED"];

const generateCoupons = (count = 35) => {
  const arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push({
      id: i,
      code: `SAVE${100 + i}`,
      discount: Math.floor(Math.random() * 30) + 5,
      type: i % 2 === 0 ? "PERCENT" : "FLAT",
      usageLimit: 100,
      used: Math.floor(Math.random() * 80),
      status: statuses[i % 3],
      expiry: new Date(Date.now() + i * 86400000).toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
    });
  }
  return arr;
};

// =====================================================
// Pagination Component
// =====================================================

const Pagination = ({ page, totalPages, setPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
      <Button variant="secondary" disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </Button>

      <div style={{ display: "flex", gap: 6 }}>
        {pages.map((p) => (
          <Button key={p} variant={p === page ? undefined : "secondary"} onClick={() => setPage(p)}>
            {p}
          </Button>
        ))}
      </div>

      <Button
        variant="secondary"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </div>
  );
};

// =====================================================
// Main Component
// =====================================================

const CouponsAdminPage = () => {
  const [coupons, setCoupons] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    code: "",
    discount: "",
    type: "PERCENT",
    usageLimit: "",
    expiry: "",
  });

  // Load Data
  useEffect(() => {
    setCoupons(generateCoupons());
  }, []);

  // Stats
  const stats = useMemo(() => {
    const total = coupons.length;
    const active = coupons.filter((c) => c.status === "ACTIVE").length;
    const expired = coupons.filter((c) => c.status === "EXPIRED").length;
    return { total, active, expired };
  }, [coupons]);

  // Filtering
  const filtered = useMemo(() => {
    return coupons.filter((c) => {
      const matchSearch = c.code.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "ALL" || c.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [coupons, search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / perPage) || 1;

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const handleCreate = () => {
    const newCoupon = {
      id: coupons.length + 1,
      ...form,
      used: 0,
      status: "ACTIVE",
      createdAt: new Date().toLocaleDateString(),
    };
    setCoupons([newCoupon, ...coupons]);
    setOpen(false);
  };

  const handleDelete = (id) => {
    setCoupons(coupons.filter((c) => c.id !== id));
  };

  return (
    <Container>
      <Header>
        <Title>Coupons Management</Title>
        <Actions>
          <Button variant="secondary">Export</Button>
          <Button onClick={() => setOpen(true)}>Create Coupon</Button>
        </Actions>
      </Header>

      {/* Stats */}
      <Grid>
        <Card>
          <p>Total Coupons</p>
          <StatValue>{stats.total}</StatValue>
        </Card>
        <Card>
          <p>Active</p>
          <StatValue>{stats.active}</StatValue>
        </Card>
        <Card>
          <p>Expired</p>
          <StatValue>{stats.expired}</StatValue>
        </Card>
      </Grid>

      {/* Filters */}
      <Filters>
        <Input
          placeholder="Search coupon code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="ALL">All Status</option>
          <option value="ACTIVE">Active</option>
          <option value="EXPIRED">Expired</option>
          <option value="SCHEDULED">Scheduled</option>
        </Select>
      </Filters>

      {/* Table */}
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Code</Th>
              <Th>Discount</Th>
              <Th>Type</Th>
              <Th>Used</Th>
              <Th>Limit</Th>
              <Th>Status</Th>
              <Th>Expiry</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((c) => (
              <tr key={c.id}>
                <Td>{c.id}</Td>
                <Td>{c.code}</Td>
                <Td>{c.discount}</Td>
                <Td>{c.type}</Td>
                <Td>
                  {c.used}/{c.usageLimit}
                </Td>
                <Td>{c.usageLimit}</Td>
                <Td>
                  <Badge status={c.status}>{c.status}</Badge>
                </Td>
                <Td>{c.expiry}</Td>
                <Td>
                  <Button variant="secondary" onClick={() => handleDelete(c.id)}>
                    Delete
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />

      {/* Modal */}
      {open && (
        <ModalOverlay>
          <Modal>
            <h3>Create Coupon</h3>

            <FormGroup>
              <label>Code</label>
              <Input
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <label>Discount</label>
              <Input
                type="number"
                value={form.discount}
                onChange={(e) => setForm({ ...form, discount: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <label>Type</label>
              <Select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <option value="PERCENT">Percent</option>
                <option value="FLAT">Flat</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <label>Usage Limit</label>
              <Input
                type="number"
                value={form.usageLimit}
                onChange={(e) => setForm({ ...form, usageLimit: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <label>Expiry Date</label>
              <Input
                type="date"
                value={form.expiry}
                onChange={(e) => setForm({ ...form, expiry: e.target.value })}
              />
            </FormGroup>

            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              <Button onClick={handleCreate}>Save</Button>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </div>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default CouponsAdminPage;
