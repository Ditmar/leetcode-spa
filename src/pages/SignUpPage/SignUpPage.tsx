import type { SignUpPageProps } from "./SignUpPage.types";
import { initialValues } from "./SignUpPage.hook";
import { GoogleIcon, GithubIcon, FacebookIcon } from "./mocks";
import { GRADIENT_PRIMARY, COPY } from "./SignUpPage.constants";
import studentURL from "./assets/student.png?url";

const STUDENT_IMG = {
  scale: 2.30, // ↑ Tamaño del estudiante (1 = original, 2 = x2). SUBE/BAJA aquí
  dx: -380,    // ←→ Mover estudiante (neg izquierda, pos derecha)
  dy: -360,    // ↑↓ Mover estudiante (neg arriba, pos abajo)
};

const SignUpPage = (_props: SignUpPageProps) => {
  return (
    <>
      {/* ──────────────────────────────
       
         ────────────────────────────── */}
      <style>{`
        /* ===== Variables Desktop (layout Figma) ===== */
        :root {
          --frame-w: 1512px;
          --frame-h: 982px;

          --topbar-left: 100px;
          --topbar-top: 55px;
          --topbar-w: 1313px;
          --topbar-h: 64px;

          --brand-w: 229px;
          --brand-fs: 40px;
          --nav-gap: 76px;
          --nav-offset: calc(var(--brand-w) + 517px); /* 229 + 517 */

          --card-left: 923px;
          --card-top: 159px;
          --card-w: 488.76px;
          --card-h: 761px;

          --stud-left: 60px;
          --stud-top: 21px;
          --stud-w: 732.5241px;
          --stud-h: 963.681px;

          --ring1-left: 127px;
          --ring1-top: 321px;
          --ring2-left: 610px;
          --ring2-top: 774px;

          --chip1-left: 587.15px;
          --chip1-top: 374.64px;
          --chip2-left: 60px;
          --chip2-top: 810.07px;

          --test-left: 674.26px;
          --test-top: 393.72px;
          --courses-left: 127.13px;
          --courses-top: 831.82px;

          --accent: ${GRADIENT_PRIMARY};
        }

        /* Fondo base (igual al Figma) + scroll vertical nativo */
        .su-outer {
          min-height: 100vh;
          width: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          background:
            radial-gradient(27.33% 40.65% at 78.12% 29.89%, #FF7F85 0%, rgba(48,83,118,0) 100%),
            radial-gradient(33.55% 50.83% at 55.38% 89.56%, #8CBCFE 0%, rgba(221,130,255,0) 100%),
            radial-gradient(58.68% 99.14% at 0% 0%, #FF9649 0%, rgba(83,214,255,0) 100%),
            radial-gradient(30.1% 50.86% at 100% 100%, #9949FF 0%, rgba(255,81,217,0) 100%),
            #F5F5F5;
        }

        /* ======= DESKTOP ≥1280px ======= */
        @media (min-width: 1280px) {
          .su-frame {
            position: relative;
            width: var(--frame-w);
            height: var(--frame-h);
            margin: 0 auto;
          }

          .su-topbar {
            position: absolute;
            left: var(--topbar-left);
            top: var(--topbar-top);
            width: var(--topbar-w);
            height: var(--topbar-h);
          }
          .su-brand {
            position: absolute;
            left: 0; top: 0; height: var(--topbar-h);
            display: flex; align-items: center;
          }
          .su-brand-left {
            font: 700 var(--brand-fs)/48px Syne, system-ui, sans-serif;
            background: var(--accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .su-brand-right {
            font: 700 var(--brand-fs)/48px Syne, system-ui, sans-serif;
            color: #fff; margin-left: 6px;
          }
          .su-nav {
            position: absolute; top: 0;
            left: var(--nav-offset);
            display: flex; gap: var(--nav-gap);
            height: var(--topbar-h); align-items: center;
          }
          .su-nav a {
            font: 400 20px Syne, system-ui, sans-serif;
            color: rgba(0,0,0,0.7); text-decoration: none;
          }
          .su-login {
            font-weight: 700;
            background: var(--accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .su-signup-pill {
            position: absolute; right: 0; top: 0;
            width: 147px; height: 64px;
            display:flex; align-items:center; justify-content:center;
            border-radius: 50px;
            background: var(--accent); opacity: .22;
            color:#fff; font: 400 20px Syne, system-ui, sans-serif; text-decoration:none;
          }

          /* Imagen estudiante: caja y <img> sin cortes */
          .su-stud-wrap {
            position: absolute;
            left: var(--stud-left); top: var(--stud-top);
            width: var(--stud-w); height: var(--stud-h);
            overflow: visible; z-index: 2; pointer-events:none;
          }
          .su-stud-img {
            position: absolute;
            user-select: none;
          }

          /* Card */
          .su-card {
            position: absolute;
            left: var(--card-left); top: var(--card-top);
            width: var(--card-w); min-height: var(--card-h);
            background:#fff; border-radius:36.5426px;
            box-shadow: 0 18px 66px rgba(0,0,0,.08);
            padding: 28px;
          }
          .su-mini-brand { position:absolute; left:111.45px; top:36.54px; display:flex; gap:14px; align-items:center; }
          .su-mini-square { width:51.1px; height:49.16px; border-radius:2.70973px; background:var(--accent); }
          .su-mini-text { font: 700 36.5426px/44px Syne, system-ui, sans-serif; background:var(--accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-left:6px; }

          .su-input { position:absolute; width:411.1px; height:81.31px; background:#fff; box-sizing:border-box; border-radius:12.7899px; display:flex; align-items:center; padding-inline:18px; }
          .su-input.mail { left:41.11px; top:122.42px; border: .913565px solid #B23DEA; }
          .su-input.user { left:41.11px; top:225.65px; border:1.82713px solid #F1F1F1; }
          .su-input.pass { left:41.11px; top:328.88px; border:1.82713px solid #F1F1F1; }

          .su-input input { flex:1; height:40px; border:none; outline:none; font: 400 18.2713px Syne, system-ui, sans-serif; color:#333; background:transparent; }

          .su-register {
            position:absolute; left:41.11px; top:432.12px;
            width:411.1px; height:62.54px; display:flex; align-items:center; justify-content:center;
            background:var(--accent); color:#fff; border:none; border-radius:45.6783px;
            font: 400 21.9256px Syne, system-ui, sans-serif;
            box-shadow: 0 10px 26px rgba(179,61,235,.22), inset 0 0 0 1px rgba(255,255,255,.25);
          }
          .su-below { position:absolute; left:41.11px; top:517.08px; width:411.1px; display:flex; justify-content:space-between; }
          .su-below span { color:#BCBCBC; font:500 16.4442px Syne, system-ui, sans-serif; }
          .su-below a { color:#B441EB; font:500 16.4442px Syne, system-ui, sans-serif; }

          .su-or { position:absolute; left:0; right:0; top:545px; text-align:center; color:#BCBCBC; font:500 14.617px Syne, system-ui, sans-serif; }
          .su-social { position:absolute; left:0; right:0; top:570.98px; display:flex; gap:32px; justify-content:center; }
          .su-circle { width:42.02px; height:42.02px; border-radius:50%; border:1px solid rgba(0,0,0,.15); display:grid; place-items:center; background:#fff; }
          .su-recap { position:absolute; left:41.11px; top:689.74px; width:405.62px; text-align:center; color:#BCBCBC; font:500 14.617px/18px Syne, system-ui, sans-serif; }

          /* adornos */
          .su-ring { position:absolute; width:145.66px; height:145.66px; border:12px solid #C073FF; border-radius:50%; }
          .su-ring.r1 { left:var(--ring1-left); top:var(--ring1-top); }
          .su-ring.r2 { left:var(--ring2-left); top:var(--ring2-top); }

          .su-chip { position:absolute; width:227.17px; height:76.86px; display:grid; place-items:center; background:#fff; border-radius:38.43px 0 38.43px 38.43px; box-shadow:0 17.08px 59.78px rgba(0,0,0,.15); transform:rotate(180deg); }
          .su-chip.c1 { left:var(--chip1-left); top:var(--chip1-top); }
          .su-chip.c2 { left:var(--chip2-left); top:var(--chip2-top); border-radius:0 42.5478px 42.5478px 42.5478px; transform:none; }

          .su-chip-text { position:absolute; font:500 25.62px Poppins, system-ui, sans-serif; background:var(--accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
          .su-test { left:var(--test-left); top:var(--test-top); width:54px; height:38px; line-height:38px; text-align:center; }
          .su-courses { left:var(--courses-left); top:var(--courses-top); width:118px; height:43px; line-height:43px; text-align:center; }
        }

        /* ======= RESPONSIVE ≤1279px =======
           - Layout fluido apilado (sin absoluto).
           - Nada se corta; scroll nativo si hace falta. */
        @media (max-width: 1279px) {
          .su-frame {
            max-width: 1100px;
            margin: 0 auto;
            padding: 24px 16px 56px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .su-topbar {
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap: 16px;
          }
          .su-brand {
            display:flex; align-items:center; gap:8px;
          }
          .su-brand-left { font: 700 clamp(22px, 4vw, 32px)/1 Syne, system-ui, sans-serif; background:var(--accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
          .su-brand-right{ font: 700 clamp(22px, 4vw, 32px)/1 Syne, system-ui, sans-serif; color:#fff; }
          .su-nav { display:flex; gap:24px; }
          .su-nav a { font: 500 16px Syne, system-ui, sans-serif; color:rgba(0,0,0,.7); text-decoration:none; }
          .su-login { background:var(--accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
          .su-signup-pill { display:none; } /* en móvil no usamos la píldora */

          /* bloque hero (imagen + card apilados) */
          .su-hero {
            display:flex;
            flex-direction:column;
            gap:24px;
            align-items:center;
          }
          .su-stud-wrap {
            position:relative;
            width: min(90vw, 520px);
            height: auto;
            overflow: visible;
          }
          .su-stud-img {
            position:relative;
            left: 0; top: 0;
            width: 100%;
            height: auto;
          }

          .su-card {
            width: min(92vw, 560px);
            margin: 0 auto;
            background:#fff; border-radius:28px;
            box-shadow:0 16px 44px rgba(0,0,0,.08);
            padding: 24px 18px 32px;
            position: relative;
          }

          .su-mini-brand { position:relative; left:auto; top:auto; display:flex; gap:12px; align-items:center; margin-bottom:16px; }
          .su-mini-square { width:38px; height:36px; border-radius:6px; background:var(--accent); }
          .su-mini-text { font:700 clamp(22px, 5vw, 30px)/1 Syne, system-ui, sans-serif; background:var(--accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }

          .su-input { position:relative; left:auto; top:auto; width:100%; height:64px; border-radius:12px; margin-top:14px; padding-inline:14px; }
          .su-input.mail { border:.9px solid #B23DEA; }
          .su-input.user, .su-input.pass { border:1px solid #F1F1F1; }
          .su-input input { font-size:16px; }

          .su-register { position:relative; left:auto; top:auto; width:100%; height:56px; margin-top:16px; border-radius:40px; font-size:18px; }

          .su-below { position:relative; left:auto; top:auto; width:100%; margin-top:10px; }
          .su-or { position:relative; left:auto; right:auto; top:auto; margin-top:14px; }
          .su-social { position:relative; left:auto; right:auto; top:auto; margin-top:10px; }
          .su-recap { position:relative; left:auto; top:auto; width:100%; margin-top:14px; }

          /* ocultamos adornos en móvil/tablet */
          .su-ring, .su-chip, .su-chip-text { display:none; }
        }
      `}</style>

      {/* ======= HTML ======= */}
      <div className="su-outer">
        {/* Desktop usa .su-frame como “lienzo”; en responsive es contenedor fluido */}
        <div className="su-frame">
          {/* TOP BAR */}
          <div className="su-topbar">
            <div className="su-brand">
              <span className="su-brand-left">{COPY.brandLeft}</span>
              <span className="su-brand-right">{COPY.brandRight}</span>
            </div>

            <nav className="su-nav" aria-label="main">
              <a href="#">Practice</a>
              <a href="#">Explore</a>
              <a href="/login" className="su-login">LogIn</a>
            </nav>

            <a className="su-signup-pill" href="/signup">Sign Up</a>
          </div>

          {/* DECORATIVOS (solo desktop) */}
          <div className="su-ring r1" />
          <div className="su-ring r2" />
          <div className="su-chip c1" />
          <div className="su-chip c2" />
          <div className="su-chip-text su-test">Test</div>
          <div className="su-chip-text su-courses">Courses</div>

          {/* HERO: en desktop son absolutos; en responsive se apilan */}
          <section className="su-hero">
            {/* Estudiante */}
            <div className="su-stud-wrap" aria-hidden={true}>
              <img
                className="su-stud-img"
                src={studentURL}
                alt=""
                draggable={false}
                /* 🔧 Estos estilos inline SOLO aplican en desktop (≥1280) porque
                   en el CSS responsive (≤1279) se sobreescriben para width:100%  */
                style={{
                  width: `calc(var(--stud-w) * ${STUDENT_IMG.scale})`,
                  left: `${STUDENT_IMG.dx}px`,
                  top: `${STUDENT_IMG.dy}px`,
                }}
              />
            </div>

            {/* CARD */}
            <aside className="su-card" aria-label="signup-card">
              <div className="su-mini-brand">
                <div className="su-mini-square" />
                <div className="su-mini-text">Leet Code</div>
              </div>

              <div className="su-input mail">
                <input
                  id="email"
                  placeholder="Mail Id"
                  type="email"
                  defaultValue={initialValues.email}
                />
              </div>

              <div className="su-input user">
                <input
                  id="username"
                  placeholder="Username"
                  defaultValue={initialValues.username}
                />
              </div>

              <div className="su-input pass">
                <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  defaultValue={initialValues.password}
                />
                <span aria-hidden={true} style={{ opacity: 0.6, marginLeft: 8 }}>👁️</span>
              </div>

              <button type="button" disabled className="su-register">Register</button>

              <div className="su-below">
                <span>Have an Account ?</span>
                <a href="/login">Log In</a>
              </div>

              <p className="su-or">Or you can Signup with</p>

              <div className="su-social">
                <div className="su-circle"><GoogleIcon /></div>
                <div className="su-circle"><GithubIcon /></div>
                <div className="su-circle"><FacebookIcon /></div>
              </div>

              <p className="su-recap">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </aside>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
