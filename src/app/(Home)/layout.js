import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomeLayout({ children }) {
    return (
        <>
            <div
                className="relative h-[100dvh] overflow-hidden bg-[#0B0C0E]"
                style={{
                    "--header-h": "4.625rem",
                    "--header-top": "1rem",
                    "--footer-h": "88px",
                    "--fab-extra": "56px",
                    "--gap": "1rem",

                }}
            >
                {/* BG blobs */}
                {/* <div
                    className="pointer-events-none absolute top-[-300px] left-1/2 -translate-x-1/2 w-[23.25rem] h-[23.25rem] rounded-full blur-[296px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(11,7,27,0.9)_0deg,rgba(141,0,251,0.9)_76.88deg,rgba(144,175,255,0.9)_120deg,rgba(151,51,252,0.9)_161.25deg,rgba(130,91,255,0.9)_198.75deg,rgba(111,229,187,0.9)_236.25deg,rgba(157,237,255,0.9)_260.62deg,rgba(11,7,27,0.9)_360deg)] -z-10"
                />
                <div
                    className="pointer-events-none absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[23.25rem] h-[23.25rem] rounded-full blur-[296px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(11,7,27,0.9)_0deg,rgba(141,0,251,0.9)_76.88deg,rgba(144,175,255,0.9)_120deg,rgba(151,51,252,0.9)_161.25deg,rgba(130,91,255,0.9)_198.75deg,rgba(111,229,187,0.9)_236.25deg,rgba(157,237,255,0.9)_260.62deg,rgba(11,7,27,0.9)_360deg)] -z-10"
                /> */}
                <div className="w-full h-[23.25rem] absolute top-[-300px] [filter:blur(296.28px)] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(255,_94,_0,_0.95)_0deg,_rgba(255,_140,_0,_0.95)_76.88deg,_rgba(255,_184,_77,_0.9)_120deg,_rgba(255,_125,_54,_0.9)_161.25deg,_rgba(204,_85,_0,_0.9)_198.75deg,_rgba(255,_214,_179,_0.85)_236.25deg,_rgba(255,_244,_230,_0.85)_260.62deg,_rgba(255,_94,_0,_0.95)_360deg)]" />
                <div className="w-full h-[23.25rem] absolute bottom-[-300px] [filter:blur(296.28px)] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(255,_94,_0,_0.95)_0deg,_rgba(255,_140,_0,_0.95)_76.88deg,_rgba(255,_184,_77,_0.9)_120deg,_rgba(255,_125,_54,_0.9)_161.25deg,_rgba(204,_85,_0,_0.9)_198.75deg,_rgba(255,_214,_179,_0.85)_236.25deg,_rgba(255,_244,_230,_0.85)_260.62deg,_rgba(255,_94,_0,_0.95)_360deg)]" />
                {/* ثابت روی صفحه */}
                {/* <Header /> */}
                <Footer />

                <main
                    className="h-[100dvh] overflow-y-auto overscroll-contain flex justify-center px-4 sm:px-6"

                >
                    <div className="w-full max-w-6xl">{children}</div>
                </main>
            </div>
        </>
    );
}
