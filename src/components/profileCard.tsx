import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ProfileCard() {
  return (
    <div className="w-[864px] px-10 py-9 bg-base-profile rounded-[10px] shadow-xl m-auto -translate-y-1/3">
      <div className="flex items-center justify-between gap-9">
        <img
          className="w-40 h-40 rounded-lg"
          src="https://github.com/jaomuro.png"
          alt=""
        />
        <div className="flex flex-col gap-2 text-base-text">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl">Jhon Cruz</h1>
            <a href="#" className="font-bold group">
              <span className="flex gap-2 text-brand-blue text-xs items-center group-hover:border-b group-hover:border-[#3294F8]">
                <p>GITHUB</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </span>
            </a>
          </div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div className="flex mt-5 gap-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} color="#3A536B" />
              <p>jaomuro</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBuilding} color="#3A536B" />
              <p>Sea Telecom</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUserGroup} color="#3A536B" />

              <p>32 seguidores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
