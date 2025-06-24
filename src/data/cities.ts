export const cities = [
  "Ahmedabad", "Allahabad", "Agra", "Aurangabad", "Amritsar", "Aligarh", "Almora", "Amravati",
  "Asansol", "Ajmer", "Ambala", "Bangalore", "Bareilly", "Bhopal", "Bhubaneshwar", "Bikaner",
  "Barpeta", "Bhavnagar", "Bhuj", "Bhagalpur", "Belgaum", "Bardhman", "Bankura", "Bhatinda",
  "Bilaspur", "Coimbatore", "Chandigarh", "Chandauli", "Cuttack", "Chittorgarh", "Cooch Behar",
  "Delhi", "Dhanbad", "Dehradun", "Darbhanga", "Dispur", "Dibrugarh", "Durg", "Dhar", "Dharwad",
  "Dimapur", "Darjeeling", "Faridabad", "Ghaziabad", "Gwalior", "Gandhinagar", "Guntur",
  "Gangtok", "Guwahati", "Gurgaon", "Gorakhpur", "Greater Noida", "Gaya", "Hyderabad", "Howrah",
  "Hisar", "Haridwar", "Indore", "Jaipur", "Jabalpur", "Jodhpur", "Jalandhar", "Jamshedpur",
  "Jamnagar", "Jhansi", "Jammu", "Jind", "Jalpaiguri", "Jhalawar", "Kolkata", "Kanpur", "Kota",
  "Kochi", "Kaithal", "Kohima", "Kurukshetra", "Lucknow", "Ludhiana", "Madurai", "Meerut",
  "Mohali", "Moradabad", "Mumbai", "Muzaffarpur", "Mysore", "Noida", "New Delhi", "Nagpur",
  "Nainital", "Nashik", "Navi Mumbai", "Nellore", "Namchi", "Pune", "Patna", "Panchkula",
  "Patiala", "Pondicherry", "Perambbalur", "Pathankot", "Ranchi", "Raipur", "Raigarh", "Rohtak",
  "Rewari", "Ratlam", "Surat", "Srinagar", "Siliguri", "Sonipat", "Thane", "Thiruvananthapuram",
  "Ujjain", "Udaipur", "Visakhapatnam", "Vadodra", "Varanasi", "Vijayawada", "Vellore", "Warangal"
];
export const citiesWithLinks = cities.map(city => ({
  name: city,
  link: `/services-network/${city.toLowerCase()}`
}));
export const citiesWithLinksMap = Object.fromEntries(
  citiesWithLinks.map(city => [city.name.toLowerCase(), city.link])
);