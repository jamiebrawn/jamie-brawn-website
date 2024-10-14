"use client";

import { useTheme } from "../context/ThemeContext";

import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <h1>Welcome</h1>
      <p>Projects and skills.</p>
      <nav>
        <ul>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/gis-projects">GIS Projects</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
