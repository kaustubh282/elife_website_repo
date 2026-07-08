import {
  FaPills,
  FaFlask,
  FaHeartbeat,
  FaIndustry,
  FaUtensils,
  FaMicrochip,
} from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { BiDna } from "react-icons/bi";

const industries = [
  { icon: <FaPills />, name: "Pharmaceuticals" },
  { icon: <BiDna />, name: "Biotechnology" },
  { icon: <FaHeartbeat />, name: "Medical Devices" },
  { icon: <FaFlask />, name: "Sterile & Aseptic Manufacturing" },
  { icon: <FaFlask />, name: "API & Fine Chemicals" },
  { icon: <FaUtensils />, name: "Food & Beverage" },
  { icon: <GiLipstick />, name: "Cosmetics & Personal Care" },
  { icon: <FaMicrochip />, name: "Industrial Automation" },
];

function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">

          {/* Left Content */}
          <div>
            <p className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
              Industries Served
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900">
              Trusted across regulated industries.
            </h2>

            <p className="text-lg leading-8 text-slate-600">
              We partner with organizations across life sciences,
              manufacturing, and industrial sectors to deliver MES,
              compliance, integration, and digital transformation solutions.
            </p>
          </div>

          {/* Industry Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">

            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex items-center gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-200 group-hover:text-blue-800">
                  {industry.icon}
                </div>

                <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-blue-800">
                  {industry.name}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Industries;