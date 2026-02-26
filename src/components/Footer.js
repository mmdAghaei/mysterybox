
export default function Footer() {

    return (
        <div className="fixed left-1/2 -translate-x-1/2 z-50 bottom-6 w-[90%] max-w-[420px] h-[var(--header-h)] rounded-[1000px] /10 backdrop-blur-xl border border-white/20 flex items-center justify-center px-4 sm:px-5 text-white">
            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-[15px] border-[#FF7F11] border-3 flex items-center justify-center">
                    <img src="/icons/home.svg" alt="" width={25} draggable={false} />
                </div>
            </div>
        </div>
    );
}
