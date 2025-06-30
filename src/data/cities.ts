export const cities = [
  "Agartala", "Agra", "Ahmedabad", "Aizawl", "Ajmer", "Aligarh", "Allahabad", "Almora", "Alwar", "Ambala",
  "Amravati", "Amritsar", "Anand", "Arrah", "Asansol", "Aurangabad", "Balaghat", "Bangalore", "Bankura", "Bardhman",
  "Bareilly", "Barpeta", "Begusarai", "Belgaum", "Bhilai", "Bhagalpur", "Bhatinda", "Bhavnagar", "Bhopal",
  "Bhubaneshwar", "Bhuj", "Bikaner", "Bilaspur", "Chandauli", "Chandigarh", "Chhindwara", "Chittorgarh",
  "Coimbatore", "Cooch Behar", "Cuttack", "Darbhanga", "Darjeeling", "Dehradun", "Delhi", "Dhanbad", "Dhar",
  "Dharwad", "Dibrugarh", "Dimapur", "Dispur", "Durg", "Eluru", "Faridabad", "Firozabad", "Gandhidham",
  "Gandhinagar", "Gangtok", "Gaya", "Ghaziabad", "Gorakhpur", "Greater Noida", "Guntur", "Gurgaon", "Guwahati",
  "Gwalior", "Haridwar", "Hazaribagh", "Hisar", "Howrah", "Hyderabad", "Imphal", "Indore", "Itanagar", "Jabalpur",
  "Jaipur", "Jalandhar", "Jalgaon", "Jalpaiguri", "Jammu", "Jamnagar", "Jamner", "Jamshedpur", "Jhalawar", "Jhansi",
  "Jind", "Jodhpur", "Jhunjhunu", "Kaithal", "Kanpur", "Karimnagar", "Katihar", "Katni", "Kargil", "Kavaratti",
  "Kochi", "Kolhapur", "Kohima", "Kolkata", "Kota", "Kottayam", "Kurukshetra", "Lucknow", "Ludhiana", "Madurai",
  "Mathura", "Meerut", "Mohali", "Moradabad", "Mumbai", "Muzaffarpur", "Mysore", "Nagpur", "Nainital", "Namchi",
  "Nanded", "Nashik", "Navi Mumbai", "Nellore", "New Delhi", "Noida", "Nizamabad", "Panaji", "Panchkula",
  "Pathankot", "Patiala", "Patna", "Perambbalur", "Pondicherry", "Port Blair", "Pune", "Purnia", "Raigarh",
  "Raipur", "Ranchi", "Ratlam", "Rewari", "Rohtak", "Roorkee", "Rourkela", "Sangli", "Satara", "Satna", "Seoni",
  "Shahjahanpur", "Shillong", "Siliguri", "Sonipat", "Srinagar", "Surat", "Thane", "Thiruvananthapuram",
  "Tirunelveli", "Trichy", "Tumkur", "Tura", "Udaipur", "Ujjain", "Vadodra", "Varanasi", "Vellore", "Vijayawada",
  "Visakhapatnam", "Warangal"
];

export const citiesWithLinks = cities.map(city => ({
  name: city,
  link: `/services-network/${city.toLowerCase()}`
}));
export const citiesWithLinksMap = Object.fromEntries(
  citiesWithLinks.map(city => [city.name.toLowerCase(), city.link])
);