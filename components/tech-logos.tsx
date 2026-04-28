import type React from "react"
export function TensorflowLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M26.15 16.875v5.918l-5.136 2.967v-5.92l5.137-2.965m.23-10.75l-5.137 2.967v5.917l5.137-2.966v-5.918M5.7 18.465v5.917l5.137 2.966v-5.917L5.7 18.465m-.23-10.75l5.138 2.967v5.918L5.47 13.633V7.715M5.698 7.72l5.142 2.97-5.14 2.964-5.14-2.969 5.138-2.965m20.464 9.16l-5.135 2.963-5.137-2.965 5.137-2.966 5.136 2.969"
        fill="#ff6f00"
      />
    </svg>
  )
}

export function PytorchLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.693 10.106c2.863 0 5.19 2.327 5.19 5.19s-2.327 5.19-5.19 5.19-5.19-2.327-5.19-5.19 2.327-5.19 5.19-5.19M24.51 8.718a1.298 1.298 0 100-2.595 1.298 1.298 0 000 2.595m-14.032 5.91c0-3.804 2.053-7.13 5.11-8.93l-1.722-2.864C10.114 5.277 7.724 9.326 7.724 14.1c0 1.173.157 2.311.45 3.393.965-1.533 2.349-2.865 4.304-2.865zm7.25 9.53c-2.493 0-4.706-1.195-6.104-3.044-.38.15-.767.285-1.16.403-2.435.735-4.02 1.22-2.924 3.602 1.735 3.775 5.486 4.443 11.623 2.266l-1.434-3.228z"
        fill="#ee4c2c"
      />
    </svg>
  )
}

export function PythonLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient
          id="a"
          x1="-133.268"
          y1="-202.91"
          x2="-133.198"
          y2="-202.84"
          gradientTransform="matrix(189.38 0 0 189.81 25243.8 38519.17)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#387eb8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="-133.575"
          y1="-203.203"
          x2="-133.495"
          y2="-203.133"
          gradientTransform="matrix(189.38 0 0 189.81 25309.64 38583.42)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffe052" />
          <stop offset="1" stopColor="#ffc331" />
        </linearGradient>
      </defs>
      <path
        d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712zm-3.732 2.137a1.214 1.214 0 11-1.213 1.213 1.214 1.214 0 011.213-1.213z"
        fill="url(#a)"
      />
      <path
        d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912h-2.343v3.349s.13 4.013-3.9 4.013h-6.765s-3.772-.06-3.772 3.652v6.089s-.572 3.712 6.842 3.712zm3.732-2.147A1.214 1.214 0 1120.9 26.55a1.214 1.214 0 01-1.12 1.213z"
        fill="url(#b)"
      />
    </svg>
  )
}

export function MatlabLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient
          id="matlab-a"
          x1="16.803"
          y1="16.631"
          x2="15.013"
          y2="22.411"
          gradientTransform="matrix(1, 0, 0, -1, 0, 32)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#512" />
          <stop offset="0.23" stopColor="#523" />
          <stop offset="0.36" stopColor="#534" />
          <stop offset="0.51" stopColor="#645" />
          <stop offset="0.66" stopColor="#568" />
          <stop offset="0.84" stopColor="#29d" />
        </linearGradient>
      </defs>
      <path
        style={{ fill: "#49d" }}
        d="M2,17.5C7.1,16.1,9.2,6.8,15.1,7c2.4,0.1,3.5,1.3,5.3,3.5c2.3,2.7,8.2,6.5,8.2,7.4c0,1-1.4,2.6-3.8,3.6c-1.5,0.6-7.8,2.3-9.1,2.1C14,23.3,11.8,20.9,2,17.5z"
      />
      <path
        style={{ fill: "#4dd" }}
        d="M2,17.5c5.1,2.5,5,2.4,7.1,3.2C11.2,21.7,15.5,25,16.4,25c1.2,0,2.2-1.4,5.8-5.7c2.2-2.6,3.1-3.8,4.2-3.4c1.1,0.4,0.9,1.5-0.3,3.5c-1.3,2.1-5.5,5.4-6.9,5.3C18.1,24.7,17.5,23.6,17,23c-0.5-0.5-1.1-0.9-1.4-1c-0.4-0.1-1.1,0.1-1.5,0.3"
      />
      <path
        style={{ fill: "#c33" }}
        d="M16.5,6.8c-1.7,3.6-1.5,8.8-4.4,10.9c-0.5-1.8-1.6-3.6-4.3-6.7C6.3,9.2,4,7.6,2,7.6c-0.6,0-1.1,0.1-1.1,0.3c0,0.3,1.9,1.7,3.2,3.2c2.3,2.6,2.9,3.7,3.2,7.4"
      />
      <path
        style={{ fill: "url(#matlab-a)" }}
        d="M20.5,15.5C17,12,16.3,9.2,16.1,6.9c-0.9,0.9-1.3,3.5-1.5,5c-0.1,1.1-0.5,2.7-0.5,2.7c-0.3,1.4-1.2,2.5-1.9,3.5S9.7,20.5,8.2,20.7"
      />
    </svg>
  )
}

export function CppLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M30,16c0,1.969-5.109,3.566-11.406,3.566S7.188,17.969,7.188,16s5.109-3.566,11.406-3.566S30,14.031,30,16Z"
        transform="translate(0 0)"
        style={{ fill: "#004482" }}
      />
      <path
        d="M7.188,16c0,1.969,5.109,3.566,11.406,3.566S30,17.969,30,16"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M20.887,17.952c.844-.226,1.551-.5,2.063-.806"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M20.887,14.048c.844.226,1.551.5,2.063.806"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="19.5"
        y1="12.5"
        x2="19.5"
        y2="19.5"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="16"
        y1="12.5"
        x2="16"
        y2="19.5"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="23"
        y1="14.5"
        x2="26"
        y2="14.5"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="24.5"
        y1="13"
        x2="24.5"
        y2="16"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="12.5"
        y1="14.5"
        x2="9.5"
        y2="14.5"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="11"
        y1="13"
        x2="11"
        y2="16"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M9.5,16c0-3.314,5.819-6,13-6s13,2.686,13,6-5.819,6-13,6-13-2.686-13-6Z"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M2,11.533c0-3.314,5.819-6,13-6s13,2.686,13,6-5.819,6-13,6S2,14.847,2,11.533Z"
        transform="translate(0 0)"
        style={{ fill: "#659ad2" }}
      />
      <path
        d="M28,11.533c0,3.314-5.819,6-13,6S2,14.847,2,11.533"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#659ad2", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M13.4,13.484c.844-.225,1.551-.5,2.063-.806"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M13.4,9.581c.844.225,1.551.5,2.063.806"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="12"
        y1="8.033"
        x2="12"
        y2="15.033"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="8.5"
        y1="8.033"
        x2="8.5"
        y2="15.033"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="15.5"
        y1="10.033"
        x2="18.5"
        y2="10.033"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="17"
        y1="8.533"
        x2="17"
        y2="11.533"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="5"
        y1="10.033"
        x2="2"
        y2="10.033"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="3.5"
        y1="8.533"
        x2="3.5"
        y2="11.533"
        style={{ fill: "none", stroke: "#004482", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M2,7.067c0-3.314,5.819-6,13-6s13,2.686,13,6-5.819,6-13,6S2,10.381,2,7.067Z"
        transform="translate(0 0)"
        style={{ fill: "#00599c" }}
      />
      <path
        d="M28,7.067c0,3.314-5.819,6-13,6S2,10.381,2,7.067"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#00599c", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M13.4,9.019c.844-.226,1.551-.5,2.063-.806"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M13.4,5.116c.844.225,1.551.5,2.063.806"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="12"
        y1="3.567"
        x2="12"
        y2="10.567"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="8.5"
        y1="3.567"
        x2="8.5"
        y2="10.567"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="15.5"
        y1="5.567"
        x2="18.5"
        y2="5.567"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="17"
        y1="4.067"
        x2="17"
        y2="7.067"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="5"
        y1="5.567"
        x2="2"
        y2="5.567"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <line
        x1="3.5"
        y1="4.067"
        x2="3.5"
        y2="7.067"
        style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
      <path
        d="M28,7.067c0,3.314-5.819,6-13,6S2,10.381,2,7.067,7.819,1.067,15,1.067,28,3.753,28,7.067Z"
        transform="translate(0 0)"
        style={{ fill: "none", stroke: "#00599c", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }}
      />
    </svg>
  )
}

export function GitLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M29.472,14.753,17.247,2.528a1.8,1.8,0,0,0-2.55,0L12.27,4.955l3.217,3.217a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314,2.528,14.7a1.8,1.8,0,0,0,0,2.551L14.753,29.472a1.8,1.8,0,0,0,2.55,0L29.472,17.3a1.8,1.8,0,0,0,0-2.551"
        style={{ fill: "#dd4c35" }}
      />
      <path
        d="M12.27,4.955l-1.359,1.359,3.217,3.217a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314"
        style={{ fill: "#fff" }}
      />
    </svg>
  )
}
