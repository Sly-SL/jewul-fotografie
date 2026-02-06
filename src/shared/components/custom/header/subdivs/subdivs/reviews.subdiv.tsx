import SubdivConstructor from "@/shared/components/custom/header/subdivs/subdiv-constructor.subdiv";
import {BasicH1} from "@/shared/components/lib/basic/text/h1.text";
import {CONSTANTS} from "@/shared/consts/consts.consts";
import {CommentForm} from "@/shared/components/forms/comment.form";
import {DefaultCommentsEnum} from "@/shared/consts/enums/default-comments.enum";
import CommentBody from "@/shared/components/custom/body/comments/comment.body";
import type {CommentBodyProps} from "@/shared/types/comment-body.type";
import WeAreChangingForYou from "@/shared/components/custom/we-are-changing-for-you.custom";
import Link from "next/link";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";
import {ArrowRight} from "lucide-react";

const ReviewsSubdiv = () => {
    const data:{data:CommentBodyProps[]} = {data:[]};
    data.data = DefaultCommentsEnum.slice(0,3);


    return (
        <SubdivConstructor id={"reviews"}>
            <section className={"grid grid-cols-1 gap-1"}>
                <BasicH1 className={"flex justify-start"}>
                    Tylko sprawdzone opinie
                </BasicH1>
                <div className={"flex flex-col pt-3 gap-3 p-6"}>
                    {CONSTANTS.IS_BETA ? <WeAreChangingForYou description={"Niedługo każdy klient będzie mógł zostawić komentarz"}/> :
                        <article className={"md:pt-5"}>
                            <CommentForm/>
                        </article>}
                    {data.data.length > 0 &&
                        <>
                            {data.data.map((comment: CommentBodyProps, i) => (
                                <div
                                    key={i}
                                    className="lg:w-2xl md:w-2xs hover:scale-[1.02] duration-300 md:h-[300px] lg:h-[350px] flex-shrink-0"
                                >
                                    <CommentBody data={comment} />
                                </div>
                            ))}

                            {/* 🔥 Кастомный элемент в конце */}
                            <Link href={shortcuts.reviews} className="w-2xl hover:scale-[1.02] duration-300 h-[400px] flex-shrink-0 bg-white/10 rounded-2xl border-4 border-orange-500/40 flex items-center justify-center">
                                <p className="dark:text-white text-black opacity-70 text-xl">Zobacz wszystkie opinie</p>
                                <ArrowRight size={55}/>
                            </Link>
                        </>
                    }
                </div>
            </section>
        </SubdivConstructor>
    );
};

export default ReviewsSubdiv;