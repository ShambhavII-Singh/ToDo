import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Testimonials {
    comment: string
    user: string
    picture: string
}

const testimonies: Testimonials[] = [
    {
        comment: "Intuitive interface and great features!",
        user: "Ornel Binni",
        picture: "src/assets/Images/welcomepageimg1.jpg",
    },
    {
        comment: "Important for busy professionals.",
        user: "Tom Byrom",
        picture: "src/assets/Images/welcomepageimg2.jpg",
    },
    {
        comment: "This app is incredibly user-friendly!",
        user: "Vladimir Malyavko",
        picture: "src/assets/Images/welcomepageimg3.jpg",
    },
]

export const HorizontalImageSlider = () => {
    return (
        <ScrollArea className="hidden md:flex whitespace-nowrap w-full rounded-r-none bg-background h-screen">
            <div className="flex w-max space-x-4 p-4">
            {testimonies.map((testimony) => (
                <figure key={testimony.user} className="shrink-0">
                <div className="overflow-hidden rounded-md mb-2">
                    <img
                    src={testimony.picture}
                    alt={`Comment by ${testimony.picture}`}
                    className="aspect-[1] h-fit w-fit object-cover"
                    style={{ maxHeight: "88vh"}}
                    />
                </div>
                <figcaption className="font-semibold text-foreground">
                    {" "}
                    <span>
                    {testimony.comment}
                    </span>
                </figcaption>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                    - {" "}
                    <span>
                    {testimony.user}
                    </span>
                </figcaption>
                </figure>
            ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}