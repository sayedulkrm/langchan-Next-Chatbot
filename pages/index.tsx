import { useRef, useState, useEffect } from "react";
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";
import { Message } from "@/types/chat";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import LoadingDots from "@/components/ui/LoadingDots";
import { Document } from "langchain/document";

import ChatOpenIcon from "../public/chatbox-icon.svg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { format } from "date-fns";

export default function Home() {
    const [chatOpen, setChatOpen] = useState<boolean>(false);
    const [showSendButton, setShowSendButton] = useState<boolean>(false);
    const [demoMessageBtn, setDemoMessageBtn] = useState<boolean>(true);
    const [demoMessage, setDemoMessage] = useState<any>("");

    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [apiLoading, setApiLoading] = useState<boolean>(false);
    const currentDate = new Date();
    const currentTime = format(currentDate, "hh:mm:ss aa");
    const currentDay = format(currentDate, "EEEE");

    const [error, setError] = useState<string | null>(null);

    const [messageState, setMessageState] = useState<{
        messages: Message[];
        pending?: string;
        history: [string, string][];
        pendingSourceDocs?: Document[];
    }>({
        messages: [
            {
                message: "Hello!👋 I'm Mr.SIVE 🤖. Nice to meet you!",
                type: "apiMessage",
                time: currentTime,
                day: currentDay,
                sourceDocs: [],
            },
            {
                message: "What brought you here today?",
                type: "apiMessage",
                time: currentTime,
                day: currentDay,

                sourceDocs: [],
            },
        ],
        history: [],
    });

    const { messages, history } = messageState;

    const messageListRef = useRef<HTMLDivElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    // =========================

    function getCurrentTime() {
        const currentDate = new Date();
        return format(currentDate, "hh:mm:ss aa"); // Format the time as desired
    }

    function getCurrentDay() {
        const currentDate = new Date();
        return format(currentDate, "EEEE"); // Format the day name as desired
    }

    const handleDemoMessageClick = async (e: any) => {
        e.preventDefault();

        setError(null);
        const apibtnmessage = e.target.value;
        const btnMessage = apibtnmessage.trim();

        console.log(btnMessage);
        const currentTime = getCurrentTime();
        const currentDay = getCurrentDay();

        setMessageState((state) => ({
            ...state,
            messages: [
                ...state.messages,
                {
                    type: "userMessage",
                    message: btnMessage,
                    time: currentTime,
                    day: currentDay,
                },
            ],
        }));

        setLoading(true);
        setApiLoading(true);
        setDemoMessageBtn(false);
        setQuery("");

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    btnMessage,
                    history,
                }),
            });
            const data = await response.json();
            console.log("data", data);

            if (data.error) {
                setError(data.error);
            } else {
                setMessageState((state) => ({
                    ...state,
                    messages: [
                        ...state.messages,
                        {
                            type: "apiMessage",
                            message: data.text,
                            sourceDocs: data.sourceDocuments,
                        },
                    ],
                    history: [...state.history, [btnMessage, data.text]],
                }));
            }
            console.log("messageState", messageState);

            setLoading(false);
            setApiLoading(false);
            setDemoMessageBtn(false);

            //scroll to bottom
            messageListRef.current?.scrollTo(
                0,
                messageListRef.current.scrollHeight
            );
        } catch (error) {
            setLoading(false);
            setApiLoading(false);
            setDemoMessageBtn(false);

            setError(
                "An error occurred while fetching the data. Please try again."
            );
            console.log("error", error);
        }
    };

    const HandleClearHistory = (): void => {
        setMessageState((state) => ({
            ...state,
            history: [],
            messages: [
                {
                    message: "Hello!👋 I'm Mr.SIVE 🤖. Nice to meet you!",
                    type: "apiMessage",
                    time: currentTime,
                    day: currentDay,
                    sourceDocs: [],
                },
                {
                    message: "What brought you here today?",
                    type: "apiMessage",
                    time: currentTime,
                    day: currentDay,
                    sourceDocs: [],
                },
            ],
        }));

        setLoading(false);
        setApiLoading(false);
        setDemoMessageBtn(true);
    };

    const HandleChatOpen = (): void => {
        setChatOpen(!chatOpen);
    };

    // ==========================

    //handle form submission
    async function handleSubmit(e: any) {
        e.preventDefault();

        setError(null);

        if (!query) {
            alert("Please input a question");
            return;
        }

        const question = query.trim();
        const currentTime = getCurrentTime();
        const currentDay = getCurrentDay();

        setMessageState((state) => ({
            ...state,
            messages: [
                ...state.messages,
                {
                    type: "userMessage",
                    message: question,
                    time: currentTime,
                    day: currentDay,
                },
            ],
        }));

        setLoading(true);
        setApiLoading(true);
        setQuery("");
        setDemoMessageBtn(false);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    question,
                    history,
                }),
            });
            const data = await response.json();
            console.log("data", data);

            if (data.error) {
                setError(data.error);
            } else {
                setMessageState((state) => ({
                    ...state,
                    messages: [
                        ...state.messages,
                        {
                            type: "apiMessage",
                            message: data.text,
                            sourceDocs: data.sourceDocuments,
                        },
                    ],
                    history: [...state.history, [question, data.text]],
                }));
            }
            console.log("messageState", messageState);

            setLoading(false);
            setApiLoading(false);

            //scroll to bottom
            messageListRef.current?.scrollTo(
                0,
                messageListRef.current.scrollHeight
            );
        } catch (error) {
            setLoading(false);
            setError(
                "An error occurred while fetching the data. Please try again."
            );
            console.log("error", error);
        }
    }

    //prevent empty submissions
    const handleEnter = (e: any) => {
        if (e.key === "Enter" && query) {
            handleSubmit(e);
        } else if (e.key == "Enter") {
            e.preventDefault();
        }
    };

    useEffect(() => {
        textAreaRef.current?.focus();
        if (query) {
            setShowSendButton(true);
        }
        if (query === "") {
            setShowSendButton(false);
        }
    }, [query]);

    return (
        <>
            <Layout>
                <div className="flex flex-col h-[100vh] w-full relative">
                    <div className={styles.main}>
                        {chatOpen ? (
                            <div className={`${styles.sidebar}`}>
                                <div className="chatbox-header flex bg-[#1E6BD8] lg:h-20 sm:h-16 gap-2 justify-between items-center lg:rounded-t-xl sm:rounded-none p-3 text-white">
                                    <div className="chatbox-image-header flex items-center justify-start gap-2">
                                        <div className="w-auto relative">
                                            <img
                                                src="/bot-image.png"
                                                alt="image"
                                                className="w-10 lg:h-12 lg:w-12 sm:h-5 sm:w-5 rounded-full"
                                            />

                                            <div className=" w-3 h-3 bg-[#00ff00] absolute bottom-0 right-0 rounded-full"></div>
                                        </div>
                                        <div className="flex flex-col ">
                                            <h4 className="chatbox-heading-header font-bold lg:text-xl sm:text-lg ">
                                                Chat support
                                            </h4>
                                            <h6>online</h6>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end space-x-10 sm:space-x-3">
                                        <button
                                            className=" flex items-center lg:w-12 hover:bg-[#ffffff2d] rounded lg:h-8 lg:p-1 sm:h-8 sm:w-10 sm:p-1"
                                            onClick={HandleClearHistory}
                                        >
                                            <svg
                                                width="100%"
                                                height="20"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>

                                        {/* ========== */}

                                        <button
                                            className=" flex items-center lg:w-12 hover:bg-[#ffffff2d] rounded lg:h-8 lg:p-1 sm:h-8 sm:w-10 sm:p-1"
                                            onClick={HandleChatOpen}
                                        >
                                            <svg
                                                width="100%"
                                                height="20"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* ====================  X X X ========================= */}

                                <div className={styles.cloud}>
                                    <div
                                        ref={messageListRef}
                                        className={styles.messagelist}
                                    >
                                        {messages.map((message, index) => {
                                            let icon;
                                            let className;
                                            if (message.type === "apiMessage") {
                                                icon = (
                                                    <Image
                                                        key={index}
                                                        src="/bot-image.png" //image of the AI/Business
                                                        alt="AI"
                                                        width="25"
                                                        height="25"
                                                        className=""
                                                    />
                                                );
                                                className = styles.apimessage;
                                            } else {
                                                // The latest message sent by the user will have a consistent styling
                                                className = styles.usermessage;
                                            }
                                            return (
                                                // <div className="flex items-end mb-3 gap-2">
                                                //     {icon}
                                                <>
                                                    <p
                                                        className={
                                                            styles.messageTime
                                                        }
                                                    >
                                                        {message.time} -{" "}
                                                        {message.day}
                                                    </p>

                                                    <div
                                                        key={`chatMessage-${index}`}
                                                        className={className}
                                                    >
                                                        {icon}

                                                        <div
                                                            className={
                                                                styles.markdownanswer
                                                            }
                                                        >
                                                            <ReactMarkdown linkTarget="_blank">
                                                                {
                                                                    message.message
                                                                }
                                                            </ReactMarkdown>
                                                        </div>
                                                        {/* {message.sourceDocs && (      //if you want sources displayed
                      <div className="p-5" key={`sourceDocsAccordion-${index}`}>
                        <Accordion type="single" collapsible className="flex-col">
                          {message.sourceDocs.map((doc, index) => (
                            <div key={`messageSourceDocs-${index}`}>
                              <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>
                                  <h3>Source {index + 1}</h3>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ReactMarkdown linkTarget="_blank">
                                    {doc.pageContent}
                                  </ReactMarkdown>
                                  <p className="mt-2">
                                    <b>Source:</b> {doc.metadata.source}
                                  </p>
                                </AccordionContent>
                              </AccordionItem>
                            </div>
                          ))}
                        </Accordion>
                      </div>
                    )} */}
                                                    </div>
                                                </>
                                                // </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* ==================================== */}

                                <div className={styles.mainDemoMessage}>
                                    {demoMessageBtn ? (
                                        <div
                                            className={
                                                styles.demoMessageAllButtonWrapper
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.demoMessageAllButton
                                                }
                                            >
                                                <button
                                                    value={"About Chatbot"}
                                                    onClick={(e) =>
                                                        handleDemoMessageClick(
                                                            e
                                                        )
                                                    }
                                                >
                                                    🔥 About Chatbot
                                                </button>

                                                <button
                                                    value={"Contact us"}
                                                    onClick={(e) =>
                                                        handleDemoMessageClick(
                                                            e
                                                        )
                                                    }
                                                >
                                                    ✉️ Contact us
                                                </button>

                                                {/*  */}
                                            </div>

                                            <div
                                                className={
                                                    styles.demoMessageAllButton
                                                }
                                            >
                                                <button
                                                    value={"Free trail"}
                                                    onClick={(e) =>
                                                        handleDemoMessageClick(
                                                            e
                                                        )
                                                    }
                                                >
                                                    ⚡ Free trail
                                                </button>

                                                <button
                                                    value={"Pricing"}
                                                    onClick={(e) =>
                                                        handleDemoMessageClick(
                                                            e
                                                        )
                                                    }
                                                >
                                                    🏷️ Pricing
                                                </button>

                                                {/*  */}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                {/* ================================================= */}
                                {/* ================================================= */}
                                {/* ================================================= */}

                                {apiLoading && (
                                    <div className={styles.ldsEllipsis}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                )}

                                {/* ================================================= */}
                                {/* ================================================= */}

                                <div className={styles.center}>
                                    <div className={styles.cloudform}>
                                        <form
                                            onSubmit={handleSubmit}
                                            style={{
                                                border: "1px solid lightgray",
                                                borderRadius: "10px",
                                            }}
                                            className="flex gap-2 w-full items-center  h-full"
                                        >
                                            <textarea
                                                disabled={loading}
                                                onKeyDown={handleEnter}
                                                ref={textAreaRef}
                                                autoFocus={false}
                                                rows={1}
                                                maxLength={512}
                                                id="userInput"
                                                name="userInput"
                                                placeholder={
                                                    loading
                                                        ? "Waiting for response..."
                                                        : "Write your question here"
                                                }
                                                value={query}
                                                onChange={(e) =>
                                                    setQuery(e.target.value)
                                                }
                                                className={styles.textarea}
                                            />

                                            {showSendButton ? (
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className={`${styles.generatebutton} generatebutton-inside`}
                                                >
                                                    {loading ? (
                                                        <div
                                                            className={
                                                                styles.loadingwheel
                                                            }
                                                        >
                                                            <LoadingDots color="#000" />
                                                        </div>
                                                    ) : (
                                                        // Send icon SVG in input field
                                                        // <svg
                                                        //     viewBox="0 0 20 20"
                                                        //     className={styles.svgicon}
                                                        //     xmlns="http://www.w3.org/2000/svg"
                                                        // >
                                                        //     <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                                        // </svg>

                                                        <div
                                                            className={`${styles.chatbutton} flex justify-center items-center lg:w-8 h-8 w-8  rounded-full bg-[#1E6BD8] hover:bg-[#135bbe]
                                                        `}
                                                        >
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 15 15"
                                                                fill="none"
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                                                                    fill="currentColor"
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    )}
                                                </button>
                                            ) : null}
                                        </form>
                                        <div className="w-full flex text-center justify-center cursor-pointer bg-[rgb(250,250,250,0.8)] hover:bg-[rgb(245,245,245)] items-center py-1 rounded mt-2">
                                            <p className="text-xs">
                                                Power by 🚀
                                                <span className="text-[#1e6bd8]">
                                                    SIVE
                                                </span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {error && (
                                        <div className="border border-red-400 rounded-md p-4">
                                            <p className="text-red-500">
                                                {error}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : null}

                        {chatOpen ? null : (
                            // (
                            //     <button
                            //         onClick={HandleChatOpen}
                            //         className={` flex items-center justify-center self-end p-4 rounded-full bg-[#1e6bd8] hover:bg-[#0b54bb] shadow-lg lg:block md:block hidden z-10`}
                            //     >
                            //         <svg
                            //             width="30"
                            //             height="30"
                            //             viewBox="0 0 15 15"
                            //             fill="none"
                            //             style={{ color: "white" }}
                            //             xmlns="http://www.w3.org/2000/svg"
                            //         >
                            //             <path
                            //                 d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                            //                 fill="currentColor"
                            //                 fillRule="evenodd"
                            //                 clipRule="evenodd"
                            //             ></path>
                            //         </svg>
                            //     </button>
                            // )

                            <button
                                onClick={HandleChatOpen}
                                className={` flex items-center justify-center self-end p-4 rounded-full bg-[#1e6bd8] hover:bg-[#0b54bb] shadow-lg sm:block mr-5 sm:mr-0 z-10`}
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    style={{ color: "white" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>

                                {/* <Image
                                    src={ChatOpenIcon}
                                    alt="Chat Open Icon"
                                /> */}
                            </button>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}
