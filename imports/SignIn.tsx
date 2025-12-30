import svgPaths from "./svg-sn8yq41hkc";

function CustomGroup() {
  return (
    <div className="h-[24.856px] relative shrink-0 w-[31.5px]" data-name="CUSTOM-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.5 24.8563">
        <g id="CUSTOM-group">
          <path d={svgPaths.p26f37b70} fill="var(--fill-0, #FF6321)" id="Vector" />
          <path d={svgPaths.p120ad60} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2eddc100} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pf6fc240} fill="var(--fill-0, #5A220A)" id="Vector_4" />
          <path d={svgPaths.p1ae78180} fill="var(--fill-0, #5A220A)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function LogoMain() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="Logo - Main">
      <CustomGroup />
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#0f172b] text-[21px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Bellwether
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[583px]">
      <LogoMain />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[0px] text-[14px] text-center text-nowrap">
        <span className="font-normal" style={{ fontVariationSettings: "'opsz' 9" }}>
          Don’t have account?
        </span>{" "}
        <span className="font-['DM_Sans:Medium',sans-serif] font-medium text-[#0f172b]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Sign up
        </span>
      </p>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 w-full" data-name="Header Container">
      <p className="font-['DM_Sans:SemiBold',sans-serif] leading-[36px] min-w-full relative shrink-0 text-[#0f172b] text-[30px] w-[min-content]">Welcome to Bellwether</p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] leading-[24px] relative shrink-0 text-[#62748e] text-[16px] text-nowrap">Welcome back! Enter your details to continue.</p>
    </div>
  );
}

function InputOutline() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="InputOutline">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#62748e] text-[16px] text-nowrap">emanualberzeber@gmail.com.</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] w-full">Email</p>
      <InputOutline />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-shadow-[0px_1px_3px_#df571d] text-white">
        <p className="leading-[20px]">Sign In</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff6321] relative rounded-[6px] shadow-[0px_0px_0px_1px_#cf4e17,0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
          <Frame1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0.75px_0px_rgba(255,255,255,0.12),inset_0px_-1px_0px_0px_#d95017]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <HeaderContainer />
      <Frame6 />
      <Button />
    </div>
  );
}

function SignUpWithContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Sign Up With Container">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 1">
            <path d="M0 0.5H166" id="Vector 970" stroke="var(--stroke-0, #E2E8F0)" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#62748e] text-[14px] text-nowrap">
        <p className="leading-[20px]">Or sign in with</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 1">
            <path d="M0 0.5H166" id="Vector 970" stroke="var(--stroke-0, #E2E8F0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-1/2 size-[25px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Frame">
          <path d={svgPaths.p15afdc80} fill="var(--fill-0, #0F172B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1SignInInactive() {
  return (
    <div className="absolute bg-[#f1f5f9] left-0 overflow-clip rounded-[8px] size-[47px] top-0" data-name="1. Sign in Inactive">
      <Frame />
    </div>
  );
}

function FacebookIcon() {
  return (
    <div className="absolute left-1/2 size-[25px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Facebook Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Facebook Icon">
          <circle cx="12.5" cy="12.5" fill="url(#paint0_linear_1_3286)" id="bg" r="10.9375" />
          <path d={svgPaths.p2f7c6d00} fill="var(--fill-0, white)" id="f" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3286" x1="12.5" x2="12.5" y1="1.5625" y2="23.3726">
            <stop stopColor="#18ACFE" />
            <stop offset="1" stopColor="#0163E0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component1SignInInactive1() {
  return (
    <div className="absolute bg-[#f1f5f9] left-[87px] overflow-clip rounded-[8px] size-[47px] top-0" data-name="1. Sign in Inactive">
      <FacebookIcon />
    </div>
  );
}

function GoogleIcon() {
  return (
    <div className="absolute left-1/2 size-[25px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Google Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Google Icon">
          <path d={svgPaths.p375b7a80} fill="var(--fill-0, #4285F4)" id="vector" />
          <path d={svgPaths.p28033900} fill="var(--fill-0, #34A853)" id="vector_2" />
          <path d={svgPaths.p11b23680} fill="var(--fill-0, #FBBC05)" id="vector_3" />
          <path d={svgPaths.p33be3480} fill="var(--fill-0, #EB4335)" id="vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Component1SignInInactive2() {
  return (
    <div className="absolute bg-[#f1f5f9] left-[174px] overflow-clip rounded-[8px] size-[47px] top-0" data-name="1. Sign in Inactive">
      <GoogleIcon />
    </div>
  );
}

function AppleIcon() {
  return (
    <div className="absolute left-1/2 size-[25px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Apple Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Apple Icon">
          <path d={svgPaths.p306b6000} fill="var(--fill-0, #283544)" id="bg" />
          <path d={svgPaths.p16b17f00} fill="var(--fill-0, white)" id="apple" />
        </g>
      </svg>
    </div>
  );
}

function Component1SignInInactive3() {
  return (
    <div className="absolute bg-[#f1f5f9] left-[253px] overflow-clip rounded-[8px] size-[47px] top-0" data-name="1. Sign in Inactive">
      <AppleIcon />
    </div>
  );
}

function Microsoft() {
  return (
    <div className="absolute contents inset-[15.63%]" data-name="microsoft">
      <div className="absolute bg-[#feba08] inset-[53.13%_15.63%_15.63%_53.13%]" data-name="yeloow" />
      <div className="absolute bg-[#05a6f0] inset-[53.13%_53.13%_15.63%_15.63%]" data-name="blue" />
      <div className="absolute bg-[#80bc06] inset-[15.63%_15.63%_53.13%_53.13%]" data-name="green" />
      <div className="absolute bg-[#f25325] inset-[15.63%_53.13%_53.13%_15.63%]" data-name="red" />
    </div>
  );
}

function MicrosoftIcon() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[25px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Microsoft Icon">
      <Microsoft />
    </div>
  );
}

function Component1SignInInactive4() {
  return (
    <div className="absolute bg-[#f1f5f9] left-[340px] overflow-clip rounded-[8px] size-[47px] top-0" data-name="1. Sign in Inactive">
      <MicrosoftIcon />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[72px] relative shrink-0 w-[395.5px]">
      <Component1SignInInactive />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[23.5px] text-[#0f172b] text-[14px] text-center text-nowrap top-[53px] translate-x-[-50%]">SSO</p>
      <Component1SignInInactive1 />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[110.5px] text-[#0f172b] text-[14px] text-center text-nowrap top-[53px] translate-x-[-50%]">Facebook</p>
      <Component1SignInInactive2 />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[197.5px] text-[#0f172b] text-[14px] text-center text-nowrap top-[53px] translate-x-[-50%]">Google</p>
      <Component1SignInInactive3 />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[276.5px] text-[#0f172b] text-[14px] text-center text-nowrap top-[53px] translate-x-[-50%]">Apple</p>
      <Component1SignInInactive4 />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[363.5px] text-[#0f172b] text-[14px] text-center text-nowrap top-[53px] translate-x-[-50%]">Microsoft</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[450px]">
      <Frame7 />
      <SignUpWithContainer />
      <Frame8 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Links">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] text-nowrap">Privacy</p>
      <div className="bg-[#90a1b9] rounded-[100px] shrink-0 size-[5px]" data-name="Separator" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[14px] text-nowrap">{`Terms & Condition`}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#90a1b9] text-[0px] text-[14px] text-nowrap">
        <span>{`© `}</span>
        <span className="font-normal" style={{ fontVariationSettings: "'opsz' 9" }}>
          2
        </span>
        025 Kasana Inc. All rights reserved.
      </p>
      <Links />
    </div>
  );
}

function Component1SignInInactive5() {
  return (
    <div className="content-stretch flex flex-col h-[969px] items-center justify-between overflow-clip p-[24px] relative rounded-[20px] shrink-0 w-[631px]" data-name="1. Sign in Inactive">
      <Frame4 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Component1SignInInactive6() {
  return <div className="bg-[#e2e8f0] rounded-[100px] shrink-0 size-[8px]" data-name="1. Sign in Inactive" />;
}

function Component1SignInInactive7() {
  return <div className="bg-[#0f172b] h-[8px] rounded-[100px] shrink-0 w-[24px]" data-name="1. Sign in Inactive" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Component1SignInInactive6 />
      <Component1SignInInactive7 />
      <Component1SignInInactive6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%+0.5px)] top-[97px] translate-x-[-50%]">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#0f172b] text-[32px] text-center w-[566px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Publish your book with complete confidence across all platforms
      </p>
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[30.02%_12%_16.68%_11.87%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 552 515.946">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pf5c5e80} fill="var(--fill-0, #3EC1F3)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p35fba880} fill="var(--fill-0, #FF824D)" fillRule="evenodd" id="Vector_2" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.pf7f9c00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.pfea9670} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
            <path clipRule="evenodd" d={svgPaths.p69c9d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_5" />
            <path clipRule="evenodd" d={svgPaths.p3ad89900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_6" />
            <path clipRule="evenodd" d={svgPaths.p1c96ed00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_7" />
            <path clipRule="evenodd" d={svgPaths.p18340480} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_8" />
            <path clipRule="evenodd" d={svgPaths.p9d8fa80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_9" />
            <path clipRule="evenodd" d={svgPaths.p32d11500} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_10" />
            <path clipRule="evenodd" d={svgPaths.p29b0ef00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_11" />
            <path clipRule="evenodd" d={svgPaths.p17e31600} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_12" />
            <path clipRule="evenodd" d={svgPaths.p2794cc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_13" />
            <path clipRule="evenodd" d={svgPaths.p29eacf00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_14" />
            <path clipRule="evenodd" d={svgPaths.pe36f600} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_15" />
            <path clipRule="evenodd" d={svgPaths.p1879d200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_16" />
            <path clipRule="evenodd" d={svgPaths.p6370e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_17" />
            <path clipRule="evenodd" d={svgPaths.p3553f080} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_18" />
            <path clipRule="evenodd" d={svgPaths.p70c080} fill="var(--fill-0, #3EC1F3)" fillRule="evenodd" id="Vector_19" />
            <path clipRule="evenodd" d={svgPaths.p3754580} fill="var(--fill-0, #3EC1F3)" fillRule="evenodd" id="Vector_20" />
            <path clipRule="evenodd" d={svgPaths.p1eb7e200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_21" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component1SignInInactive8() {
  return (
    <div className="bg-[#f8fafc] h-[968px] overflow-clip relative rounded-[20px] shrink-0 w-[725px]" data-name="1. Sign in Inactive">
      <Frame3 />
      <Group />
    </div>
  );
}

export default function SignIn() {
  return (
    <div className="bg-white relative size-full" data-name="Sign in">
      <div className="size-full">
        <div className="content-stretch flex gap-[28px] items-start px-[28px] py-[27px] relative size-full">
          <Component1SignInInactive5 />
          <Component1SignInInactive8 />
        </div>
      </div>
    </div>
  );
}