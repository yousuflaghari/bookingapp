
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Page";
import About from "./pages/about/Page";
import Contact from "./pages/contact/Page";
import Faq from "./pages/faq/Page";
import Careers from "./pages/careers/Page";
import Press from "./pages/press/Page";
import Investors from "./pages/investors/Page";
import Affiliate from "./pages/affiliate/Page";
import Howitworks from "./pages/howitworks/Page";
import Mobileapp from "./pages/mobileapp/Page";
import {Blog} from "./pages/blog/Page";
import BlogSlug from "./pages/blog/slug/Page";
import Destinations from "./pages/destinations/Page";
import DestinationsCity from "./pages/destinations/city/Page";
import Topcities from "./pages/topcities/Page";
import Tophotels from "./pages/tophotels/Page";
import Toprestaurants from "./pages/toprestaurants/Page";
import Luxurystays from "./pages/luxurystays/Page";
import Budgetstays from "./pages/budgetstays/Page";
import Familystays from "./pages/family-stays/Page";
import Businesstravel from "./pages/businesstravel/Page";
import Romanticgetaways from "./pages/romanticgetaways/Page";
import Deals from "./pages/deals/Page";
import Seasonaloffers from "./pages/seasonaloffers/Page";
import Giftcards from "./pages/giftcards/Page";
import Referearn from "./pages/referearn/Page";
import Terms from "./pages/terms/Page";
import Privacy from "./pages/privacy/Page";
import Cookies from "./pages/cookies/Page";
import Refundpolicy from "./pages/refundpolicy/Page";
import Sitemap from "./pages/sitemap/Page";
import NotFound404 from "./pages/NotFound404/Page";
import NotFound500 from "./pages/NotFound500/Page";
import Maintenance from "./pages/maintenance/Page";
import Comingsoon from "./pages/comingsoon/Page";
import Login from "./pages/login/Page";
import Register from "./pages/register/Page";
import Vendorregister from "./pages/vendorregister/Page";
import Adminlogin from "./pages/adminlogin/Page";
import Forgotpassword from "./pages/forgotpassword/Page";
import Resetpassword from "./pages/resetpassword/Page";
import Verifyemail from "./pages/verifyemail/Page";
import Twofa from "./pages/Twofa/Page";
import Resendverification from "./pages/resendverification/Page";
import Changepassword from "./pages/changepassword/Page";
import Updateemail from "./pages/updateemail/Page";
import Deleteaccount from "./pages/deleteaccount/Page";
import Accountlocked from "./pages/accountlocked/Page";
import Reactivateaccount from "./pages/reactivateaccount/Page";
import SocialLogin from "./pages/sociallogin/Page";
import Otplogin from "./pages/otplogin/Page";
import Success from "./pages/success/Page";
import Error from "./pages/error/Page";
import Logout from "./pages/logout/Page";
import Securityalert from "./pages/securityalert/Page";
import Hotels from "./pages/hotels/Page";
import HotelsSearch from "./pages/hotels/search/Page";
import HotelsFilter from "./pages/hotels/filter/Page";
import HotelsMap from "./pages/hotels/map/Page";
import HotelsCompare from "./pages/hotels/compare/Page";
import HotelsWishlist from "./pages/hotels/wishlist/Page";
import HotelsTrending from "./pages/hotels/trending/Page";
import HotelsNew from "./pages/hotels/new/Page";
import HotelsPopular from "./pages/hotels/popular/Page";
import HotelsToprated from "./pages/hotels/top-rated/Page";
import HotelsDeals from "./pages/hotels/deals/Page";
import HotelsLuxury from "./pages/hotels/luxury/Page";
import HotelsBudget from "./pages/hotels/budget/Page";
import HotelsFamily from "./pages/hotels/family/Page";
import HotelsBusiness from "./pages/hotels/business/Page";
import HotelsId from "./pages/hotels/id/Page";
import HotelsIdRooms from "./pages/hotels/id/rooms/Page";
import HotelsIdGallery from "./pages/hotels/id/gallery/Page";
import HotelsIdReviews from "./pages/hotels/id/reviews/Page";
import HotelsIdAmenities from "./pages/hotels/id/amenities/Page";
import HotelsIdPolicies from "./pages/hotels/id/policies/Page";
import HotelsIdLocation from "./pages/hotels/id/location/Page";
import HotelsIdAvailability from "./pages/hotels/id/availability/Page";
import HotelsIdFaq from "./pages/hotels/id/faq/Page";
import HotelsIdNearby from "./pages/hotels/id/nearby/Page";
import HotelsIdSimilar from "./pages/hotels/id/similar/Page";
import HotelsIdOffers from "./pages/hotels/id/offers/Page";
import HotelsIdHost from "./pages/hotels/id/host/Page";
import HotelsIdContact from "./pages/hotels/id/contact/Page";
import HotelsIdReport from "./pages/hotels/id/report/Page";
import HotelsFilterPrice from "./pages/hotels/filter/price/Page";
import HotelsFilterRating from "./pages/hotels/filter/rating/Page";
import HotelsFilterLocation from "./pages/hotels/filter/location/Page";
import HotelsFilterAmenities from "./pages/hotels/filter/amenities/Page";
import HotelsFilterType from "./pages/hotels/filter/type/Page";
import HotelsFilterDeals from "./pages/hotels/filter/deals/Page";
import HotelsFilterPopular from "./pages/hotels/filter/popular/Page";
import HotelsFilterTrending from "./pages/hotels/filter/trending/Page";
import HotelsFilterNew from "./pages/hotels/filter/new/Page";
import Restaurants from "./pages/restaurants/Page";
import RestaurantsSearch from "./pages/restaurants/search/Page";
import RestaurantsFilter from "./pages/restaurants/filter/Page";
import RestaurantsMap from "./pages/restaurants/map/Page";
import RestaurantsToprated from "./pages/restaurants/toprated/Page";
import RestaurantsTrending from "./pages/restaurants/trending/Page";
import RestaurantsDeals from "./pages/restaurants/deals/Page";
import RestaurantsLuxury from "./pages/restaurants/luxury/Page";
import RestaurantsFamily from "./pages/restaurants/family/Page";
import RestaurantsId from "./pages/restaurants/id/Page";
import RestaurantsIdMenu from "./pages/restaurants/id/menu/Page";
import RestaurantsIdGallery from "./pages/restaurants/id/gallery/Page";
import RestaurantsIdReviews from "./pages/restaurants/id/reviews/Page";
import RestaurantsIdBooking from "./pages/restaurants/id/booking/Page";
import RestaurantsIdLocation from "./pages/restaurants/id/location/Page";
import RestaurantsIdOffers from "./pages/restaurants/id/offers/Page";
import RestaurantsIdSimilar from "./pages/restaurants/id/similar/Page";
import RestaurantsIdFaq from "./pages/restaurants/id/faq/Page";
import RestaurantsIdContact from "./pages/restaurants/id/contact/Page";
import RestaurantsIdReport from "./pages/restaurants/id/report/Page";
import RestaurantsFilterCuisine from "./pages/restaurants/filter/cuisine/Page";
import RestaurantsFilterPrice from "./pages/restaurants/filter/price/Page";
import RestaurantsFilterRating from "./pages/restaurants/filter/rating/Page";
import RestaurantsFilterLocation from "./pages/restaurants/filter/location/Page";
import RestaurantsFilterDeals from "./pages/restaurants/filter/deals/Page";
import RestaurantsFilterPopular from "./pages/restaurants/filter/popular/Page";
import RestaurantsFilterNew from "./pages/restaurants/filter/new/Page";
import RestaurantsFilterTrending from "./pages/restaurants/filter/trending/Page";
import RestaurantsFilterOpennow from "./pages/restaurants/filter/opennow/Page";
import RestaurantsFilterFamily from "./pages/restaurants/filter/family/Page";
import BookingSelectroom from "./pages/booking/select-room/Page";
import BookingGuestdetails from "./pages/booking/guestdetails/Page";
import BookingAddons from "./pages/booking/addons/Page";
import BookingPayment from "./pages/booking/payment/Page";
import BookingReview from "./pages/booking/review/Page";
import BookingConfirmation from "./pages/booking/confirmation/Page";
import BookingSuccess from "./pages/booking/success/Page";
import BookingFailed from "./pages/booking/failed/Page";
import BookingCancel from "./pages/booking/cancel/Page";
import BookingInvoice from "./pages/booking/invoice/Page";
import BookingHistory from "./pages/booking/history/Page";
import BookingApplycoupon from "./pages/booking/applycoupon/Page";
import BookingSelectinsurance from "./pages/booking/selectinsurance/Page";
import BookingUpgraderoom from "./pages/booking/upgraderoom/Page";
import BookingSpecialrequest from "./pages/booking/specialrequest/Page";
import BookingPaymentmethod from "./pages/booking/paymentmethod/Page";
import BookingSummary from "./pages/booking/summary/Page";
import BookingRefundstatus from "./pages/booking/refundstatus/Page";
import TableSelectdate from "./pages/table/selectdate/Page";
import TableSelecttime from "./pages/table/selecttime/Page";
import TableGuestinfo from "./pages/table/guestinfo/Page";
import TableConfirmation from "./pages/table/confirmation/Page";
import UserDashboard from "./pages/user/dashboard/Page";
import UserProfile from "./pages/user/profile/Page";
import UserEditprofile from "./pages/user/editprofile/Page";
import UserBookings from "./pages/user/bookings/Page";
import UserPastbookings from "./pages/user/pastbookings/Page";
import UserUpcomingbookings from "./pages/user/upcomingbookings/Page";
import UserCancelledbookings from "./pages/user/cancelledbookings/Page";
import UserWishlist from "./pages/user/wishlist/Page";
import UserPayments from "./pages/user/payments/Page";
import UserInvoices from "./pages/user/invoices/Page";
import UserReviews from "./pages/user/reviews/Page";
import UserMessages from "./pages/user/messages/Page";
import UserNotifications from "./pages/user/notifications/Page";
import UserSecurity from "./pages/user/security/Page";
import User2fa from "./pages/user/2fa/Page";
import UserDeleteaccount from "./pages/user/deleteaccount/Page";
import UserSettings from "./pages/user/settings/Page";
import UserPreferences from "./pages/user/preferences/Page";
import UserRewards from "./pages/user/rewards/Page";
import UserReferrals from "./pages/user/referrals/Page";
import UserSupporttickets from "./pages/user/supporttickets/Page";
import UserReportissue from "./pages/user/reportissue/Page";
import UserTravelhistory from "./pages/user/travelhistory/Page";
import UserSavedcards from "./pages/user/savedcards/Page";
import UserActivitylog from "./pages/user/activitylog/Page";
import VendorDashboard from "./pages/vendor/dashboard/Page";
import VendorProperties from "./pages/vendor/properties/Page";
import VendorAddproperty from "./pages/vendor/addproperty/Page";
import VendorEditproperty from "./pages/vendor/editproperty/Page";
import VendorRooms from "./pages/vendor/rooms/Page";
import VendorBookings from "./pages/vendor/bookings/Page";
import VendorRevenue from "./pages/vendor/revenue/Page";
import VendorAnalytics from "./pages/vendor/analytics/Page";
import VendorReviews from "./pages/vendor/reviews/Page";
import VendorMessages from "./pages/vendor/messages/Page";
import VendorOffers from "./pages/vendor/offers/Page";
import VendorPayouts from "./pages/vendor/payouts/Page";
import VendorSettings from "./pages/vendor/settings/Page";
import VendorProfile from "./pages/vendor/profile/Page";
import VendorSupport from "./pages/vendor/support/Page";
import AdminDashboard from "./pages/admin/dashboard/Page";
import AdminUsers from "./pages/admin/users/Page";
import AdminVendors from "./pages/admin/vendors/Page";
import AdminHotels from "./pages/admin/hotels/Page";
import AdminRestaurants from "./pages/admin/restaurants/Page";
import AdminBookings from "./pages/admin/bookings/Page";
import AdminPayments from "./pages/admin/payments/Page";
import AdminReviews from "./pages/admin/reviews/Page";
import AdminReports from "./pages/admin/reports/Page";
import AdminAnalytics from "./pages/admin/analytics/Page";
import AdminCoupons from "./pages/admin/coupons/Page";
import AdminCms from "./pages/admin/cms/Page";
import AdminBlog from "./pages/admin/blog/Page";
import AdminSupport from "./pages/admin/support/Page";
import AdminSettings from "./pages/admin/settings/Page";
import AdminRoles from "./pages/admin/roles/Page";
import AdminPermissions from "./pages/admin/permissions/Page";
import AdminActivitylogs from "./pages/admin/activitylogs/Page";
import AdminNotifications from "./pages/admin/notifications/Page";
import AdminSystemhealth from "./pages/admin/systemhealth/Page";
import Support from "./pages/support/Page";
import SupportTicket from "./pages/support/ticket/Page";
import SupportChat from "./pages/support/chat/Page";
import SupportFaq from "./pages/support/faq/Page";
import SupportGuides from "./pages/support/guides/Page";
import CmsPages from "./pages/cms/pages/Page";
import CmsEditpage from "./pages/cms/editpage/Page";
import CmsMedia from "./pages/cms/media/Page";
import CmsBlogeditor from "./pages/cms/blogeditor/Page";
import CmsCategories from "./pages/cms/categories/Page";
import CmsTags from "./pages/cms/tags/Page";
import CmsComments from "./pages/cms/comments/Page";
import CmsSeo from "./pages/cms/seo/Page";
import CmsBanners from "./pages/cms/banners/Page";
import CmsAnnouncements from "./pages/cms/announcements/Page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/mobileapp" element={<Mobileapp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogSlug />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:city" element={<DestinationsCity />} />
        <Route path="/topcities" element={<Topcities />} />
        <Route path="/tophotels" element={<Tophotels />} />
        <Route path="/toprestaurants" element={<Toprestaurants />} />
        <Route path="/luxurystays" element={<Luxurystays />} />
        <Route path="/budgetstays" element={<Budgetstays />} />
        <Route path="/familystays" element={<Familystays />} />
        <Route path="/businesstravel" element={<Businesstravel />} />
        <Route path="/romanticgetaways" element={<Romanticgetaways />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/seasonaloffers" element={<Seasonaloffers />} />
        <Route path="/giftcards" element={<Giftcards />} />
        <Route path="/referearn" element={<Referearn />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/refundpolicy" element={<Refundpolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/NotFound404" element={<NotFound404 />} />
        <Route path="/NotFound500" element={<NotFound500 />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendorregister" element={<Vendorregister />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/verifyemail" element={<Verifyemail />} />
        <Route path="/Twofa" element={<Twofa />} />
        <Route path="/resendverification" element={<Resendverification />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/updateemail" element={<Updateemail />} />
        <Route path="/deleteaccount" element={<Deleteaccount />} />
        <Route path="/accountlocked" element={<Accountlocked />} />
        <Route path="/reactivateaccount" element={<Reactivateaccount />} />
        <Route path="/sociallogin" element={<SocialLogin />} />
        <Route path="/otplogin" element={<Otplogin />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/securityalert" element={<Securityalert />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/search" element={<HotelsSearch />} />
        <Route path="/hotels/filter" element={<HotelsFilter />} />
        <Route path="/hotels/map" element={<HotelsMap />} />
        <Route path="/hotels/compare" element={<HotelsCompare />} />
        <Route path="/hotels/wishlist" element={<HotelsWishlist />} />
        <Route path="/hotels/trending" element={<HotelsTrending />} />
        <Route path="/hotels/new" element={<HotelsNew />} />
        <Route path="/hotels/popular" element={<HotelsPopular />} />
        <Route path="/hotels/toprated" element={<HotelsToprated />} />
        <Route path="/hotels/deals" element={<HotelsDeals />} />
        <Route path="/hotels/luxury" element={<HotelsLuxury />} />
        <Route path="/hotels/budget" element={<HotelsBudget />} />
        <Route path="/hotels/family" element={<HotelsFamily />} />
        <Route path="/hotels/business" element={<HotelsBusiness />} />
        <Route path="/hotels/:id" element={<HotelsId />} />
        <Route path="/hotels/:id/rooms" element={<HotelsIdRooms />} />
        <Route path="/hotels/:id/gallery" element={<HotelsIdGallery />} />
        <Route path="/hotels/:id/reviews" element={<HotelsIdReviews />} />
        <Route path="/hotels/:id/amenities" element={<HotelsIdAmenities />} />
        <Route path="/hotels/:id/policies" element={<HotelsIdPolicies />} />
        <Route path="/hotels/:id/location" element={<HotelsIdLocation />} />
        <Route path="/hotels/:id/availability" element={<HotelsIdAvailability />} />
        <Route path="/hotels/:id/faq" element={<HotelsIdFaq />} />
        <Route path="/hotels/:id/nearby" element={<HotelsIdNearby />} />
        <Route path="/hotels/:id/similar" element={<HotelsIdSimilar />} />
        <Route path="/hotels/:id/offers" element={<HotelsIdOffers />} />
        <Route path="/hotels/:id/host" element={<HotelsIdHost />} />
        <Route path="/hotels/:id/contact" element={<HotelsIdContact />} />
        <Route path="/hotels/:id/report" element={<HotelsIdReport />} />
        <Route path="/hotels/filter/price" element={<HotelsFilterPrice />} />
        <Route path="/hotels/filter/rating" element={<HotelsFilterRating />} />
        <Route path="/hotels/filter/location" element={<HotelsFilterLocation />} />
        <Route path="/hotels/filter/amenities" element={<HotelsFilterAmenities />} />
        <Route path="/hotels/filter/type" element={<HotelsFilterType />} />
        <Route path="/hotels/filter/deals" element={<HotelsFilterDeals />} />
        <Route path="/hotels/filter/popular" element={<HotelsFilterPopular />} />
        <Route path="/hotels/filter/trending" element={<HotelsFilterTrending />} />
        <Route path="/hotels/filter/new" element={<HotelsFilterNew />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/search" element={<RestaurantsSearch />} />
        <Route path="/restaurants/filter" element={<RestaurantsFilter />} />
        <Route path="/restaurants/map" element={<RestaurantsMap />} />
        <Route path="/restaurants/toprated" element={<RestaurantsToprated />} />
        <Route path="/restaurants/trending" element={<RestaurantsTrending />} />
        <Route path="/restaurants/deals" element={<RestaurantsDeals />} />
        <Route path="/restaurants/luxury" element={<RestaurantsLuxury />} />
        <Route path="/restaurants/family" element={<RestaurantsFamily />} />
        <Route path="/restaurants/:id" element={<RestaurantsId />} />
        <Route path="/restaurants/:id/menu" element={<RestaurantsIdMenu />} />
        <Route path="/restaurants/:id/gallery" element={<RestaurantsIdGallery />} />
        <Route path="/restaurants/:id/reviews" element={<RestaurantsIdReviews />} />
        <Route path="/restaurants/:id/booking" element={<RestaurantsIdBooking />} />
        <Route path="/restaurants/:id/location" element={<RestaurantsIdLocation />} />
        <Route path="/restaurants/:id/offers" element={<RestaurantsIdOffers />} />
        <Route path="/restaurants/:id/similar" element={<RestaurantsIdSimilar />} />
        <Route path="/restaurants/:id/faq" element={<RestaurantsIdFaq />} />
        <Route path="/restaurants/:id/contact" element={<RestaurantsIdContact />} />
        <Route path="/restaurants/:id/report" element={<RestaurantsIdReport />} />
        <Route path="/restaurants/filter/cuisine" element={<RestaurantsFilterCuisine />} />
        <Route path="/restaurants/filter/price" element={<RestaurantsFilterPrice />} />
        <Route path="/restaurants/filter/rating" element={<RestaurantsFilterRating />} />
        <Route path="/restaurants/filter/location" element={<RestaurantsFilterLocation />} />
        <Route path="/restaurants/filter/deals" element={<RestaurantsFilterDeals />} />
        <Route path="/restaurants/filter/popular" element={<RestaurantsFilterPopular />} />
        <Route path="/restaurants/filter/new" element={<RestaurantsFilterNew />} />
        <Route path="/restaurants/filter/trending" element={<RestaurantsFilterTrending />} />
        <Route path="/restaurants/filter/open-now" element={<RestaurantsFilterOpennow />} />
        <Route path="/restaurants/filter/family" element={<RestaurantsFilterFamily />} />
        <Route path="/booking/select-room" element={<BookingSelectroom />} />
        <Route path="/booking/guest-details" element={<BookingGuestdetails />} />
        <Route path="/booking/add-ons" element={<BookingAddons />} />
        <Route path="/booking/payment" element={<BookingPayment />} />
        <Route path="/booking/review" element={<BookingReview />} />
        <Route path="/booking/confirmation" element={<BookingConfirmation />} />
        <Route path="/booking/success" element={<BookingSuccess />} />
        <Route path="/booking/failed" element={<BookingFailed />} />
        <Route path="/booking/cancel" element={<BookingCancel />} />
        <Route path="/booking/invoice" element={<BookingInvoice />} />
        <Route path="/booking/history" element={<BookingHistory />} />
        <Route path="/booking/applycoupon" element={<BookingApplycoupon />} />
        <Route path="/booking/selectinsurance" element={<BookingSelectinsurance />} />
        <Route path="/booking/upgraderoom" element={<BookingUpgraderoom />} />
        <Route path="/booking/specialrequest" element={<BookingSpecialrequest />} />
        <Route path="/booking/paymentmethod" element={<BookingPaymentmethod />} />
        <Route path="/booking/summary" element={<BookingSummary />} />
        <Route path="/booking/refundstatus" element={<BookingRefundstatus />} />
        <Route path="/table/selectdate" element={<TableSelectdate />} />
        <Route path="/table/selecttime" element={<TableSelecttime />} />
        <Route path="/table/guestinfo" element={<TableGuestinfo />} />
        <Route path="/table/confirmation" element={<TableConfirmation />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/editprofile" element={<UserEditprofile />} />
        <Route path="/user/bookings" element={<UserBookings />} />
        <Route path="/user/pastbookings" element={<UserPastbookings />} />
        <Route path="/user/upcomingbookings" element={<UserUpcomingbookings />} />
        <Route path="/user/cancelledbookings" element={<UserCancelledbookings />} />
        <Route path="/user/wishlist" element={<UserWishlist />} />
        <Route path="/user/payments" element={<UserPayments />} />
        <Route path="/user/invoices" element={<UserInvoices />} />
        <Route path="/user/reviews" element={<UserReviews />} />
        <Route path="/user/messages" element={<UserMessages />} />
        <Route path="/user/notifications" element={<UserNotifications />} />
        <Route path="/user/security" element={<UserSecurity />} />
        <Route path="/user/Twofa" element={<User2fa />} />
        <Route path="/user/delete-account" element={<UserDeleteaccount />} />
        <Route path="/user/settings" element={<UserSettings />} />
        <Route path="/user/preferences" element={<UserPreferences />} />
        <Route path="/user/rewards" element={<UserRewards />} />
        <Route path="/user/referrals" element={<UserReferrals />} />
        <Route path="/user/supporttickets" element={<UserSupporttickets />} />
        <Route path="/user/reportissue" element={<UserReportissue />} />
        <Route path="/user/travelhistory" element={<UserTravelhistory />} />
        <Route path="/user/savedcards" element={<UserSavedcards />} />
        <Route path="/user/activitylog" element={<UserActivitylog />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/properties" element={<VendorProperties />} />
        <Route path="/vendor/addproperty" element={<VendorAddproperty />} />
        <Route path="/vendor/editproperty" element={<VendorEditproperty />} />
        <Route path="/vendor/rooms" element={<VendorRooms />} />
        <Route path="/vendor/bookings" element={<VendorBookings />} />
        <Route path="/vendor/revenue" element={<VendorRevenue />} />
        <Route path="/vendor/analytics" element={<VendorAnalytics />} />
        <Route path="/vendor/reviews" element={<VendorReviews />} />
        <Route path="/vendor/messages" element={<VendorMessages />} />
        <Route path="/vendor/offers" element={<VendorOffers />} />
        <Route path="/vendor/payouts" element={<VendorPayouts />} />
        <Route path="/vendor/settings" element={<VendorSettings />} />
        <Route path="/vendor/profile" element={<VendorProfile />} />
        <Route path="/vendor/support" element={<VendorSupport />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/vendors" element={<AdminVendors />} />
        <Route path="/admin/hotels" element={<AdminHotels />} />
        <Route path="/admin/restaurants" element={<AdminRestaurants />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/coupons" element={<AdminCoupons />} />
        <Route path="/admin/cms" element={<AdminCms />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/support" element={<AdminSupport />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/roles" element={<AdminRoles />} />
        <Route path="/admin/permissions" element={<AdminPermissions />} />
        <Route path="/admin/activitylogs" element={<AdminActivitylogs />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
        <Route path="/admin/systemhealth" element={<AdminSystemhealth />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support/ticket" element={<SupportTicket />} />
        <Route path="/support/chat" element={<SupportChat />} />
        <Route path="/support/faq" element={<SupportFaq />} />
        <Route path="/support/guides" element={<SupportGuides />} />
        <Route path="/cms/pages" element={<CmsPages />} />
        <Route path="/cms/editpage" element={<CmsEditpage />} />
        <Route path="/cms/media" element={<CmsMedia />} />
        <Route path="/cms/blogeditor" element={<CmsBlogeditor />} />
        <Route path="/cms/categories" element={<CmsCategories />} />
        <Route path="/cms/tags" element={<CmsTags />} />
        <Route path="/cms/comments" element={<CmsComments />} />
        <Route path="/cms/seo" element={<CmsSeo />} />
        <Route path="/cms/banners" element={<CmsBanners />} />
        <Route path="/cms/announcements" element={<CmsAnnouncements />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
