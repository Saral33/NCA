interface IProps {
  types: 'Bhajan' | 'Bible'
}
const Icons = ({ types }: IProps): JSX.Element => {
  return (
    <>
      {types === 'Bhajan' ? (
        <svg
          width="157px"
          height="157px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M12 18C12 20.2091 10.2091 22 8 22C5.79086 22 4 20.2091 4 18C4 15.7909 5.79086 14 8 14C10.2091 14 12 15.7909 12 18Z"
              stroke="#fff"
              strokeWidth="1.5"
            ></path>{' '}
            <path d="M12 18V6" stroke="#fff" strokeWidth="1.5"></path>{' '}
            <path
              d="M16.1167 10.0587L13.4833 8.74199C13.1184 8.55954 12.9359 8.46831 12.7852 8.35309C12.3949 8.05463 12.128 7.62291 12.0357 7.14028C12 6.95397 12 6.74998 12 6.34199C12 5.3709 12 4.88536 12.1196 4.55528C12.4356 3.68288 13.3101 3.14239 14.2317 3.24989C14.5804 3.29057 15.0147 3.50771 15.8833 3.94199L18.5167 5.25871C18.8816 5.44117 19.0641 5.5324 19.2148 5.64761C19.6051 5.94608 19.872 6.3778 19.9643 6.86043C20 7.04673 20 7.25073 20 7.65871C20 8.6298 20 9.11535 19.8804 9.44543C19.5644 10.3178 18.6899 10.8583 17.7683 10.7508C17.4196 10.7101 16.9853 10.493 16.1167 10.0587Z"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{' '}
          </g>
        </svg>
      ) : (
        <svg
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          fill="#fff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <style type="text/css"> </style>{' '}
            <g>
              {' '}
              <polygon
                className="st0"
                points="481.771,313.228 257.896,430.587 261.287,437.071 485.162,319.697 "
              ></polygon>{' '}
              <polygon
                className="st0"
                points="254.896,469.806 486.053,348.603 482.662,342.119 251.506,463.337 "
              ></polygon>{' '}
              <path
                className="st0"
                d="M486.193,364.541L239.209,493.962c-7.5,1.906-5.781-3.953-5.797-13.125 c0.688-24.656,6.719-46.203,13.391-53.25L33.021,142.525c-9.563,11.453-17.781,47.094-10.969,85.891l211.125,281.515 c1.547,2.031,4.328,2.656,6.578,1.469l247.875-131.312c2.203-1.172,3.719-3.328,4.063-5.797s-0.516-4.953-2.328-6.688 L486.193,364.541z"
              ></path>{' '}
              <path
                className="st0"
                d="M489.85,269.259L291.803,5.181c-3.813-5.078-10.766-6.656-16.391-3.688L45.803,122.431L259.6,407.494 l225.938-119.016c3.359-1.766,5.766-4.906,6.609-8.609C492.959,276.166,492.146,272.291,489.85,269.259z M310.818,280.572 l-62.516-83.359l-53.5,28.172l-24.25-32.328l53.5-28.172l-36.594-48.797l40.031-21.078l36.594,48.781l44.594-23.484l24.25,32.328 l-44.594,23.5l62.531,83.344L310.818,280.572z"
              ></path>{' '}
            </g>{' '}
          </g>
        </svg>
      )}
    </>
  )
}

export default Icons
