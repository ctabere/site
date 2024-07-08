"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-orange-200 text-red-800 min-h-screen flex flex-col items-center justify-center">
      <div class="navbar bg-base-100">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Kum Sung</a>
        </div>
        <input type="checkbox" value="night" className="toggle theme-controller" />
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col sm:flex-row">
          <div className="flex flex-col w-1/2">
            <h1 className="text-6xl font-bold text-accent">
              Manchester Kum Sung
            </h1>
            <div class="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
              <div class="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  class="rounded-box"
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
