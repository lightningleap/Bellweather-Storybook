import svgPaths from "../../imports/svg-sn8yq41hkc";

function CustomGroup() {
  return (
    <div className="h-[24.856px] relative shrink-0 w-[31.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.5 24.8563">
        <g>
          <path d={svgPaths.p26f37b70} fill="#FF6321" />
          <path d={svgPaths.p120ad60} fill="white" />
          <path d={svgPaths.p2eddc100} fill="white" />
          <path d={svgPaths.pf6fc240} fill="#5A220A" />
          <path d={svgPaths.p1ae78180} fill="#5A220A" />
        </g>
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex gap-[11px] items-center">
      <CustomGroup />
      <span className="font-semibold text-[#0f172b] text-[21px]">
        Bellwether
      </span>
    </div>
  );
}
