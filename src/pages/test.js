import { motion } from "framer-motion";
import styles from "../styles/Test.module.css";
import { ReactTerminal } from "react-terminal";
import { useRouter } from "next/router";

export default function test() {

  return (
    <main>
      <div>
        <pre style={{ fontSize: '2vw', marginTop: '100px' }}>


          ██╗   ██╗███████╗██████╗  ██████╗ ██╗██╗<br />
          ██║   ██║██╔════╝██╔══██╗██╔════╝ ██║██║<br />
          ██║   ██║█████╗  ██████╔╝██║  ███╗██║██║<br />
          ╚██╗ ██╔╝██╔══╝  ██╔══██╗██║   ██║██║██║<br />
          <span> </span>╚████╔╝ ███████╗██║  ██║╚██████╔╝██║███████╗<br />
          ═══╝  ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝╚══════╝<br />

        </pre>
      </div>
    </main>
  );
}
