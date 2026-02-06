"use client"

import {useRef, useState,} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {BasicButton} from "@/shared/components/lib/basic/button.component";
import {BasicInput} from "@/shared/components/lib/basic/input.component";
import {CONSTANTS} from "@/shared/consts/consts.consts";
import {BasicH2} from "@/shared/components/lib/basic/text/h2.text";

const OrderConsultationForm = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    return (
        <>
            <div className={"grid items-center"}>
                <BasicButton
                    size={"lg"}
                    variant={"solid"}
                    onClick={openDialog}
                    className="px-6 py-3"
                >
                    Zamów konsultację
                </BasicButton>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-30 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.dialog
                            open
                            ref={dialogRef}
                            className="dialog-reset w-full max-w-xl sm:max-w-2xl p-6 sm:p-8 rounded-2xl shadow-2xl bg-white/90 dark:bg-[rgba(18,18,19,0.95)] backdrop-blur-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        >
                                <form action="https://formsubmit.co/el/pesome"
                                      method="POST"
                                      className="w-full max-w-full flex flex-col gap-4">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Darmowa
                                        konsultacja</h2>
                                    <BasicInput type="text" placeholder="Imię i nazwisko"
                                                  name={"name"} required
                                                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all dark:border-gray-600 dark:bg-[rgba(28,28,30,1)] dark:text-gray-100"/>
                                    <BasicInput
                                        type="tel"
                                        name="phone"
                                        placeholder="+48 XXX XXX XXX"
                                        required
                                        onInput={(e) => {
                                            const target = e.target as HTMLInputElement;
                                            target.value = target.value.replace(/[^0-9+\s()-]/g, "");

                                        }}
                                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all dark:border-gray-600 dark:bg-[rgba(28,28,30,1)] dark:text-gray-100"
                                    />

                                    <BasicH2 className={"text-2xl font-bold text-gray-900 dark:text-gray-100"}>Czas Kontaktu</BasicH2>


                                    <div className={"grid grid-cols-2 gap-5 p-5"}>
                                        <BasicInput type="text" placeholder="Godziny od"
                                                      name={"od"}
                                                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all dark:border-gray-600 dark:bg-[rgba(28,28,30,1)] dark:text-gray-100"/>

                                        <BasicInput type="text" placeholder="Godziny do"
                                                      name={"do"}
                                                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all dark:border-gray-600 dark:bg-[rgba(28,28,30,1)] dark:text-gray-100"/>

                                    </div>

                                    <input type="hidden" name="_next" value={CONSTANTS.FRONTEND_DOMEN+"/formsubmited"}/>
                                    <input type="hidden" name="_captcha" value="false"/>

                                    <div className="flex justify-end gap-3 mt-2">
                                        <button type="button" onClick={closeDialog}
                                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 hover:dark:bg-gray-700 transition-all">Anuluj
                                        </button>
                                        <button type={"submit"}
                                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-lg hover:shadow-lg transition-all duration-300">Wyślij
                                        </button>
                                    </div>
                                </form>
                            </motion.dialog>
                        </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default OrderConsultationForm;