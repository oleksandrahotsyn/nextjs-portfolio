import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <section className="relative min-h-[80vh] overflow-hidden top-2">
            <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative mx-auto flex max-w-6xl items-center px-6 py-16 lg:py-24">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="order-2 flex justify-center lg:order-1">
                            <Image
                                src="/not.png"
                                alt="Астронавт шукає сторінку"
                                width={600}
                                height={600}
                                priority
                                className="h-auto w-full max-w-md"
                            />
                    </div>

                    <div className="order-1 text-center lg:order-2 lg:text-left">
                        <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            404
                        </p>

                        <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                            Сторінку не знайдено
                        </h1>

                        <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-slate-600 md:text-lg lg:mx-0">
                            Можливо, ви ввели неправильну адресу. Поверніться на головну сторінку.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                            >
                                <Home className="h-4 w-4" />
                                На головну
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}