import React, { useState } from "react";
import Bar from "./Bar";

export default function Main() {
  return (
    <section className="mx-auto grid h-full max-w-[800px] place-items-center">
      <div className="flex min-h-[450px] w-full justify-center gap-2 md:gap-10">
        <Bar label="Easy" defaultValue={30} />
        <Bar label="Medium" defaultValue={80} />
        <Bar label="Hard" defaultValue={60} />
      </div>
    </section>
  );
}
