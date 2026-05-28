import React from "react";
import { Helmet } from "react-helmet-async";

export default function Crm() {
  return (
    <>
      <Helmet>
        <title>CRM | ZIU Infotech</title>
        <meta name="description" content="ZIU CRM integration page" />
      </Helmet>
      <section className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">ZIU CRM</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Welcome to the ZIU CRM portal. Here you can manage your customers, track sales,
          and access analytics. This page will be expanded with full CRM features soon.
        </p>
        {/* Placeholder for future CRM content */}
      </section>
    </>
  );
}
