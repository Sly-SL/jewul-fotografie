"use client";

import {type ChangeEvent, type FormEvent, memo, useCallback, useRef, useState} from "react";
import Image from "next/image";
import {ImagePlus, Loader2, Send, X} from "lucide-react";
import {useFormStatus} from "react-dom";

interface CommentFormValues {
    newComment: string;
    userName: string;
    imageFile: File | null;
}

export const CommentForm = memo(function CommentForm() {
    const [newComment, setNewComment] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const { pending } = useFormStatus();

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // =========================
    // 🔹 INTERNAL SUBMIT LOGIC
    // =========================

    const submitForm = useCallback(
        async (data: CommentFormValues) => {
            setIsSubmitting(true);
            try {
                console.log("Submitting...", data);

            } catch (err) {
                console.error("Submit error:", err);
            } finally {
                setIsSubmitting(false);
            }
        },
        []
    );

    // =========================
    // 🔹 HANDLERS
    // =========================

    const handleImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) return;

        setImageFile(file);

        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result as string);
        reader.readAsDataURL(file);
    }, []);

    const handleTextareaChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(e.target.value);

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!newComment.trim() || !userName.trim()) return;

            submitForm({ newComment, userName, imageFile });

            setNewComment("");
            setUserName("");
            setImagePreview(null);
            setImageFile(null);

            if (fileInputRef.current) fileInputRef.current.value = "";
            if (textareaRef.current) textareaRef.current.style.height = "auto";
        },
        [newComment, userName, imageFile, submitForm]
    );

    // =========================
    // 🔹 UI
    // =========================

    return (
        <form onSubmit={handleSubmit} className="space-y-6 pt-8 ring-1 ring-purple-500/50 p-4 rounded-2xl">
            {/* Name */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                    Imię <span className="text-blue-400">*</span>
                </label>

                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Wpisz imię"
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    required
                />
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                    Wiadomość <span className="text-blue-400">*</span>
                </label>

                <textarea
                    ref={textareaRef}
                    value={newComment}
                    onChange={handleTextareaChange}
                    placeholder="Napisz wiadomość..."
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none min-h-[120px]"
                    required
                />
            </div>

            {/* Profile Image */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                    Zdjęcie profilowe <span className="text-gray-400">(optional)</span>
                </label>

                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    {imagePreview ? (
                        <div className="flex items-center gap-4">
                            <Image
                                src={imagePreview}
                                alt="Preview"
                                fill
                                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500/50"
                            />

                            <button
                                type="button"
                                onClick={() => {
                                    setImagePreview(null);
                                    setImageFile(null);
                                    if (fileInputRef.current) fileInputRef.current.value = "";
                                }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                            >
                                <X className="w-4 h-4" />
                                Usuń zdjęcie
                            </button>
                        </div>
                    ) : (
                        <div className="w-full">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                accept="image/*"
                                className="hidden"
                            />

                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-500/20 text-purple-400 hover:bg-orange-500/30 transition-all border border-dashed border-orange-500/50 hover:border-purple-500"
                            >
                                <ImagePlus className="w-5 h-5" />
                                Wybierz zdjęcie profilowe
                            </button>

                            <p className="text-center text-gray-400 text-sm mt-2">
                                Maksymalny rozmiar: 5MB
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={pending || isSubmitting}
                className="relative w-full h-12 bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl font-medium text-white transition-all"
            >
                <div className="relative flex items-center justify-center gap-2">
                    {pending || isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Wysyłanie...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            Wyślij Komentarz
                        </>
                    )}
                </div>
            </button>
        </form>
    );
});