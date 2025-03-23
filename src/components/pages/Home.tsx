import Header from "../layouts/Header";
import TaskForm from "../utils/TaskForm";
import TaskList from "../utils/TaskList";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="py-8">
          <div className="container grid grid-cols-1 xl:grid-cols-[27rem,_50rem] justify-center xl:justify-between items-start gap-4 mx-auto px-2">
            <TaskForm />
            <TaskList />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
