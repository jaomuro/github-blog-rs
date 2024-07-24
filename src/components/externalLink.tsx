import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { cn } from '../lib/utils'

interface ExternalLinkProps extends LinkProps {
  text: string
  icon?: ReactNode
  position: 'left' | 'right'
}

export function ExternalLink({
  text,
  icon,
  position = 'right',
  ...rest
}: ExternalLinkProps) {
  return (
    <Link
      {...rest}
      className={cn(
        'font-bold uppercase text-xs leading-[19.2px] text-brand-blue flex items-center gap-2 border-b border-transparent ease-in-out duration-300 ',
        position !== 'right' && 'flex-row-reverse',
        'hover:border-[#3294F8]',
      )}
    >
      {text}
      {icon ?? (
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="size-3" />
      )}
    </Link>
  )
}
