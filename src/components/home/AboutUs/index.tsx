export default function About() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12"> {/* Reduced py-16 to py-12 */}
        <div className="text-center mb-8"> {/* Reduced mb-12 to mb-8 */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Business Mail</h1> {/* Reduced mb-6 to mb-4 */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading provider of business solutions, helping companies achieve their goals through innovative technology and professional services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center"> {/* Reduced gap-12 to gap-8 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Mission</h2> {/* Reduced mb-4 to mb-3 */}
            <p className="text-gray-600 mb-4"> {/* Reduced mb-6 to mb-4 */}
              To empower businesses with cutting-edge solutions that drive growth, efficiency, and success in the digital age.
            </p>
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Vision</h2> {/* Reduced mb-4 to mb-3 */}
            <p className="text-gray-600">
              To be the trusted partner for businesses worldwide, providing innovative solutions that transform the way companies operate and compete.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg"> {/* Reduced p-8 to p-6 */}
            <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3> {/* Reduced mb-4 to mb-3 */}
            <ul className="space-y-2 text-gray-600"> {/* Reduced space-y-3 to space-y-2 */}
              <li>✓ 22+ years of industry experience</li>
              <li>✓ 5247+ satisfied clients</li>
              <li>✓ 95% customer satisfaction</li>
              <li>✓ 24/7 customer support</li>
              <li>✓ Cutting-edge technology solutions</li>
              <li>✓ Competitive pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}