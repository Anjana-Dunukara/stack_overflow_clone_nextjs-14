import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
// import { getQuestions } from "@/lib/actions/question.action";

export default async function Home() {
  //   const questions = await getQuestions({});

  const questions = {
    questions: [
      {
        id: "1",
        title: "How to learn programming?",
        upVotes: 15,
        questionToTags: [
          {
            questionId: "1",
            tagId: "tag1",
            tag: { id: "tag1", name: "Programming" },
          },
          {
            questionId: "1",
            tagId: "tag2",
            tag: { id: "tag2", name: "Learning" },
          },
        ],
        author: { id: "author1", name: "John Doe", avatar: "avatar1.jpg" },
        views: 80,
        answers: 5,
        created_at: new Date("2024-01-15T08:30:00Z"),
      },
      {
        id: "2",
        title: "Best JavaScript libraries for web development?",
        upVotes: 10,
        questionToTags: [
          {
            questionId: "2",
            tagId: "tag3",
            tag: { id: "tag3", name: "JavaScript" },
          },
          {
            questionId: "2",
            tagId: "tag4",
            tag: { id: "tag4", name: "Web Development" },
          },
        ],
        author: { id: "author2", name: "Jane Smith", avatar: "avatar2.jpg" },
        views: 60,
        answers: 3,
        created_at: new Date("2024-01-18T14:45:00Z"),
      },
      {
        id: "3",
        title: "Introduction to machine learning?",
        upVotes: 12,
        questionToTags: [
          {
            questionId: "3",
            tagId: "tag5",
            tag: { id: "tag5", name: "Machine Learning" },
          },
          {
            questionId: "3",
            tagId: "tag6",
            tag: { id: "tag6", name: "Introduction" },
          },
        ],
        author: { id: "author3", name: "Bob Johnson", avatar: "avatar3.jpg" },
        views: 40,
        answers: 7,
        created_at: new Date("2024-01-20T10:15:00Z"),
      },
    ],
  };

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions ? (
          questions.questions?.map((question, i) => {
            return (
              <QuestionCard
                key={i}
                _id={question.id}
                title={question.title}
                upvotes={question.upVotes}
                questionToTags={question.questionToTags}
                author={question.author}
                views={question.views}
                answers={question.answers}
                createdAt={question.created_at}
              />
            );
          })
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
