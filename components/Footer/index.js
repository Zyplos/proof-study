import { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import NavLink from "../NavLink";

export default function Navbar() {
  // const { authUser, loading, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.footer}>
      <NavLink href="https://forms.gle/KXumt5XSuZjufvon9" style={{ backgroundColor: "rgb(170, 5, 148)", color: "var(--c-bodyContrast)" }} target="_blank">
        🕷 Report Bug
      </NavLink>
    </div>
  );
}
