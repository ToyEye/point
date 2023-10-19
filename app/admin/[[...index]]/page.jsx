"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.confix";

const AdminPage = () => {
  return <NextStudio config={config} />;
};

export default AdminPage;
