type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <h1 className="break-words text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl break-words text-base text-muted">{description}</p>
      )}
    </div>
  );
}
