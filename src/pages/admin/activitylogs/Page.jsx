
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Download, RefreshCcw, Search, Eye } from "lucide-react";

// =============================
// Styled Components
// =============================
const Page = styled(motion.div)`
  padding: 24px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: ${(p) => (p.primary ? "#2563eb" : "#fff")};
  color: ${(p) => (p.primary ? "#fff" : "#333")};
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 10px 12px 10px 34px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
`;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const TableWrapper = styled.div`
  overflow: auto;
  border: 1px solid #eee;
  border-radius: 12px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
  background: #f3f4f6;
  font-size: 12px;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #f1f1f1;
  font-size: 14px;
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  color: #fff;
  background: ${(p) => (p.success ? "#16a34a" : "#dc2626")};
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 500px;
  max-width: 90%;
`;

// =============================
// Mock API
// =============================
const actions = [
  "LOGIN",
  "LOGOUT",
  "CREATE_USER",
  "UPDATE_USER",
  "DELETE_USER",
  "CREATE_BOOKING",
  "UPDATE_BOOKING",
  "CANCEL_BOOKING",
  "PAYMENT_SUCCESS",
  "PAYMENT_FAILED",
  "ROLE_CHANGE",
  "PASSWORD_RESET",
  "SYSTEM_SETTING_UPDATE",
];

const roles = ["Super Admin", "Admin", "Manager", "Support"];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateMockLogs = (count = 120) => {
  const logs = [];
  for (let i = 1; i <= count; i++) {
    logs.push({
      id: i,
      user: `admin${(i % 9) + 1}@mail.com`,
      role: randomItem(roles),
      action: randomItem(actions),
      ip: `192.168.1.${i % 255}`,
      createdAt: new Date(Date.now() - i * 3600 * 1000).toISOString(),
      details: `Detailed description for activity log #${i}.`,
      status: i % 5 === 0 ? "FAILED" : "SUCCESS",
      resource: i % 2 === 0 ? "Booking" : "User",
      resourceId: Math.floor(Math.random() * 9000) + 1000,
    });
  }
  return logs;
};

const formatDate = (iso) => new Date(iso).toLocaleString();

// =============================
// Component
// =============================
const AdminActivityLogPage = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [actionFilter, setActionFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLogs(generateMockLogs());
      setLoading(false);
    }, 500);
  }, []);

  const filtered = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch =
        log.user.toLowerCase().includes(search.toLowerCase()) ||
        log.action.toLowerCase().includes(search.toLowerCase());

      const matchesAction = actionFilter === "ALL" || log.action === actionFilter;
      const matchesStatus = statusFilter === "ALL" || log.status === statusFilter;

      return matchesSearch && matchesAction && matchesStatus;
    });
  }, [logs, search, actionFilter, statusFilter]);

  const totalPages = Math.ceil(filtered.length / perPage) || 1;

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  return (
    <Page initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card>
        <CardHeader>
          <Title>Admin Activity Logs</Title>
          <Actions>
            <Button onClick={() => window.location.reload()}>
              <RefreshCcw size={16} /> Refresh
            </Button>
            <Button primary>
              <Download size={16} /> Export
            </Button>
          </Actions>
        </CardHeader>

        <CardContent>
          <Filters>
            <div style={{ position: "relative" }}>
              <Search
                size={16}
                style={{ position: "absolute", left: 10, top: 12, color: "#888" }}
              />
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <Select value={actionFilter} onChange={(e) => setActionFilter(e.target.value)}>
              <option value="ALL">All Actions</option>
              {actions.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </Select>

            <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="ALL">All Status</option>
              <option value="SUCCESS">SUCCESS</option>
              <option value="FAILED">FAILED</option>
            </Select>

            <Select value={perPage} onChange={(e) => setPerPage(Number(e.target.value))}>
              {[5, 10, 20].map((n) => (
                <option key={n} value={n}>{n} / page</option>
              ))}
            </Select>
          </Filters>

          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>User</Th>
                  <Th>Role</Th>
                  <Th>Action</Th>
                  <Th>IP</Th>
                  <Th>Date</Th>
                  <Th>Status</Th>
                  <Th>View</Th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <Td colSpan="8">Loading...</Td>
                  </tr>
                ) : (
                  paginated.map((item) => (
                    <tr key={item.id}>
                      <Td>#{item.id}</Td>
                      <Td>{item.user}</Td>
                      <Td>{item.role}</Td>
                      <Td>{item.action}</Td>
                      <Td>{item.ip}</Td>
                      <Td>{formatDate(item.createdAt)}</Td>
                      <Td>
                        <Badge success={item.status === "SUCCESS"}>
                          {item.status}
                        </Badge>
                      </Td>
                      <Td>
                        <Button onClick={() => setSelected(item)}>
                          <Eye size={14} /> View
                        </Button>
                      </Td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </TableWrapper>

          <PaginationWrapper>
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Previous
            </Button>
            <div>
              Page {page} / {totalPages}
            </div>
            <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
              Next
            </Button>
          </PaginationWrapper>
        </CardContent>
      </Card>

      {selected && (
        <ModalOverlay onClick={() => setSelected(null)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h3>Activity Details</h3>
            <p><b>ID:</b> {selected.id}</p>
            <p><b>User:</b> {selected.user}</p>
            <p><b>Action:</b> {selected.action}</p>
            <p><b>Status:</b> {selected.status}</p>
            <p><b>IP:</b> {selected.ip}</p>
            <p><b>Date:</b> {formatDate(selected.createdAt)}</p>
            <p><b>Details:</b> {selected.details}</p>
            <br />
            <Button onClick={() => setSelected(null)}>Close</Button>
          </Modal>
        </ModalOverlay>
      )}
    </Page>
  );
};

export default AdminActivityLogPage;
