const TaskLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-blue-300 p-4">タスクレイアウト</div>
      {children}
    </div>
  );
};

export default TaskLayout;
