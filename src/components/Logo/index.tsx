import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export default function Logo(props: Readonly<Props>) {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps ?? 'lazy'
  const priority = priorityFromProps ?? 'low'

  return (
    <img
      alt="Logo RATP Group"
      width={193}
      height={60}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('w-full', className)}
      src="/logo.svg"
    />
  )
}
