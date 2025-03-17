import sample1 from "../Images/stellapic1.png";
import sample2 from "../Images/projects/mamily.png";
import sample3 from "../Images/projects/levelnext.png";
import sample4 from "../Images/projects/hdfc.png";
import languify from "../Images/projects/budgeticu (2).png";
import desource1 from "../Images/desource2.png";
import { FaPlusCircle } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

export default function ExtraProjectBottom() {
  return (
    <div className="flex flex-col font-outfit bg-orange-100 py-16 -skew-y-1">
      <div className="skew-y-1">
        <div className="seven-title font-medium text-center text-[#704421] space-y-2">
          <h1 className="seven-title tracking-tighter">
            Other <span className="underline">Side Projects</span>{" "}
          </h1>
        </div>
        <div className="py-6 max-w-[70rem] grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          <a
            target="_blank"
            href="https://score1600.com"
            className="h-full gap-8 p-8 rounded-xl shadow-md cursor-pointer bg-[#ffedd5]"
          >
            <div className="flex items-center">
              <img
                src={sample4}
                alt="Image of another project of mine"
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="p-4 space-y-4 flex flex-col text-black justify-center">
              <a
                href="https://score1600.com"
                className="text-blue-500 underline"
                target="_blank"
              >
                hdfcupiautopay.in
              </a>
              <h1 className="five-title text-wrap">HDFC UPI Autopay</h1>
              <h3 className="text-sm sm:text-lg text-balance leading-6 font-light text-gray-800">
                Led the development and implementation of a comprehensive system
                for managing bank mandates in collaboration with PayU. The
                project encompassed mandate setup, execution, and revocation
                processes, ensuring secure and efficient handling of financial
                transactions. In this application we are using Laravel for the
                backend and HTML, CSS and Javascript for frontend. My role in
                this project is Full-stack developer.
                <br />
                <br />
              </h3>
            </div>
          </a>
          <a
            target="_blank"
            href="https://mamily.in"
            className="gap-8 shadow-md cursor-pointer bg-[#ffedd5] p-8 rounded-xl"
          >
            <div className="flex items-center">
              <img
                src={sample2}
                alt="Image of another project of mine"
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="p-4 space-y-4 flex flex-col text-black justify-center space-y-2">
              <a
                href="https://mamily.in"
                className="text-blue-500 underline"
                target="_blank"
              >
                Mamily.in
              </a>
              <h1 className="five-title">Mamily</h1>
              <h3 className="text-sm sm:text-lg text-balance leading-6 font-light text-gray-800">
                This is an application that provides information about parenting
                and pregnancy, and you can consult with doctors and care guides.
                I worked as a backend developer on this project. This project is
                based on PHP Laravel. There are many critical modules in this
                project like video calling functionality and real-time chat. As
                a backend developer and lead developer this is my responsibility
                to take care of the team and all backend logical parts, and I
                did this very responsibly
                <br />
                <br />
              </h3>
            </div>
          </a>
          <a
            target="_blank"
            href="levelnext.in"
            className="gap-8 p-8 rounded-xl shadow-md cursor-pointer bg-[#ffedd5]"
          >
            <div className="p-4 space-y-4 flex flex-col text-black justify-center">
              <div className="flex items-center">
                <img
                  src={sample3}
                  alt="Image of another project of mine"
                  className="rounded-md shadow-lg"
                />
              </div>
              <div className="space-y-2">
                <a
                  href="levelnext.in"
                  className="text-blue-500 underline"
                  target="_blank"
                >
                  Levelnext.in
                </a>
                <h1 className="five-title">Levelnext</h1>
                <h3 className="text-sm sm:text-lg text-balance leading-6 font-light text-gray-800">
                  This is the only platform where professors of IIM and EDII
                  teach how you can make your business large. This is a Laravel
                  based application and the database is MySQL. I worked as a
                  backend developer on this project
                </h3>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://budgeticu.in"
            className="gap-8 p-8 rounded-xl shadow-md cursor-pointer bg-[#ffedd5]"
          >
            <div className="p-4 space-y-4 flex flex-col text-black justify-center">
              <div className="flex items-center">
                <img
                  src={languify}
                  alt="Image of another project of mine"
                  className="rounded-md shadow-lg"
                />
              </div>
              <div className="space-y-2">
                <a
                  href="https://budgeticu.in"
                  className="text-blue-500 underline"
                  target="_blank"
                >
                  budgeticu.in
                </a>
                <h1 className="five-title">Budget Icue</h1>
                <h3 className="text-sm sm:text-lg text-balance leading-6 font-light text-gray-800">
                  BudgetICU operates as more than just a traditional medical
                  facility; it functions as an integral part of a healthcare
                  ecosystem. Our focus extends beyond treatment alone,
                  encompassing a patient-centric and supportive environment. In
                  adherence to lean healthcare principles, we ensure a
                  streamlined approach with an abundance of specialized medical
                  professionals available.
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
