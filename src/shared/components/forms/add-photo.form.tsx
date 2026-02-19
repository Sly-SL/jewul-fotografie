"use client";

import {SubmitEvent, useState} from "react";
import {UploadImageAction} from "@/app/admin/action";
import {toast} from "sonner";
import {BasicH3} from "@/shared/components/lib/basic/text/h3.text";

export const AddPhotoForm = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        await UploadImageAction(file);
        toast.info(<BasicH3>Obraz został wysłany</BasicH3>)
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto p-6">
            <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-[25px] border border-white/20 shadow-lg">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[5px] rounded-2xl"></div>
                    <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]"></div>
                </div>

                <div className="relative z-10 flex flex-col gap-4 p-6">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        className="relative z-10 px-4 py-2 border rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
                    />

                    <button
                        type="submit"
                        className="relative z-10 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm shadow-lg hover:bg-white/30 transition"
                    >
                        Dodaj
                    </button>
                </div>
            </div>
        </form>
    );
};