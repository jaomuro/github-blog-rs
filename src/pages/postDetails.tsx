import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../components/header'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../components/externalLink'

export function PostDetails() {
  return (
    <>
      <Header />
      <div className="w-[864px] px-10 py-9 bg-base-profile rounded-[10px] shadow-xl m-auto -translate-y-1/3">
        <div className="flex justify-between">
          <ExternalLink
            text={'voltar'}
            position={'left'}
            to={'/'}
            icon={<FontAwesomeIcon icon={faChevronLeft} size="lg" />}
          />
          <ExternalLink to={'#'} target="_blank" text="Ver no github" />
        </div>
        <h1 className="text-2xl mt-5 text-base-title font-bold">
          JavaScript data types and data structures
        </h1>
        <div className="flex mt-5 gap-8 text-base-spam">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGithub} color="#3A536B" size="lg" />
            <p>jaomuro</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBuilding} color="#3A536B" size="lg" />
            <p>Há 1 dia</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUserGroup} color="#3A536B" size="lg" />

            <p>5 comentários</p>
          </div>
        </div>
      </div>
    </>
  )
}
