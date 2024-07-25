import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../components/header'
import {
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../components/externalLink'

export function PostDetails() {
  return (
    <>
      <Header />
      <div className="w-[864px] px-10 py-9 bg-base-profile rounded-[10px] shadow-xl m-auto -mt-20">
        <div className="flex justify-between">
          <ExternalLink
            text={'voltar'}
            position={'left'}
            to={'/'}
            icon={<FontAwesomeIcon icon={faChevronLeft} size="lg" />}
          />
          <ExternalLink
            to={'#'}
            target="_blank"
            text="Ver no github"
            position={'right'}
          />
        </div>
        <h1 className="text-2xl mt-5 text-base-title font-bold">
          JavaScript data types and data structures
        </h1>
        <ul className=" mt-5 flex items-center gap-8 text-base text-base-spam">
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faGithub}
              color="#3A536B"
              className="size-[18px]"
            />
            jaomuro
          </li>
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faBuilding}
              color="#3A536B"
              className="size-[18px]"
            />
            Há 1 dia
          </li>
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faUserGroup}
              color="#3A536B"
              className="size-[18px]"
            />
            5 comentários
          </li>
        </ul>
      </div>
      <main className="flex flex-col w-[864px] mx-auto py-10 px-8">
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </main>
    </>
  )
}
