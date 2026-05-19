"use client";
import { useParams } from "next/navigation";

export default function StudentDetailsPage() {

    const { studentid } = useParams()

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Student Details</h1>
            <p>Details for student ID: {studentid}</p>
        </div>
    );
}