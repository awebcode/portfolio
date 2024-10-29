"use client";
import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/marquee";
import TitleSubtitle from "./reusables/contents/TitleSubtitle";
import Image from "next/image";
import Wrapper from "./reusables/contents/Wrapper";
import { faker } from "@faker-js/faker";
import { positiveReviews } from "./data/DATA";
import Container from "./reusables/contents/Container";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

// Generate random testimonials using Faker.js
const generateTestimonials = (count: number): Review[] => {
  return Array.from({ length: count }, () => ({
    name: faker.person.firstName(),
    username: `@${faker.internet.userName().toLowerCase()}`,
    body: faker.helpers.arrayElement(positiveReviews), //
    img: faker.image.avatar(),
  }));
};

const firstRow = generateTestimonials(10);
const secondRow = generateTestimonials(10);

const ReviewCard = ({ img, name, username, body }: Review) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]", // Light theme
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]" // Dark theme
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={img}
          className="rounded-full object-cover"
          width={32}
          height={32}
          alt={`${name}'s avatar`}
          unoptimized
          loading="lazy"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-400 dark:text-white">
            {name}
          </figcaption>
          <p>{username}</p>
        </div>
      </div>
      <p className="mt-2 text-sm">{body}</p>
    </figure>
  );
};

export default function Testimonials() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Wrapper>
      <div className="relative flex min-h-[600px] w-full flex-col items-center  justify-center overflow-hidden rounded-lg border">
        <Container>
          {" "}
          <TitleSubtitle
            subTitlePosition="bottom"
            title={
              <>
                What People <span className="text-primary">Are Saying?</span>
              </>
            }
            subtitle="Building trust through collaboration and delivering exceptional results."
          />
        </Container>
        {!isMobile && (
          <>
            {" "}
            <Marquee className="[--duration:30s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </>
        )}
        {isMobile && <MobileCarousel items={firstRow} />}
        {isMobile && <MobileCarousel items={secondRow} />}
      </div>
    </Wrapper>
  );
}

function MobileCarousel({ items }: { items: Review[] }) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full p-2 my-4 relative "
    >
      <CarouselContent>
        {items.map((review, index) => (
          <CarouselItem key={index} className="basis-2/2 md:basis-2/3 lg:basis-1/3">
            <ReviewCard key={review.username} {...review} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={cn("absolute -top-4 right-12 flex gap-2 items-center")}>
        <CarouselPrevious className="text-primary border-primary/50 dark:border-white/50 dark:text-white " />
        <CarouselNext className="text-primary border-primary/50 dark:border-white/50 dark:text-white " />
      </div>
    </Carousel>
  );
}
