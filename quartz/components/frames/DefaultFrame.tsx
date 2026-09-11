import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"
import CopyrightFooter from "../CopyrightFooter"

const Header = HeaderConstructor()

/**
 * The default page frame — three-column layout with left sidebar, center
 * content (header + body + afterBody), and right sidebar, followed by a footer.
 *
 * This is the original Quartz layout, extracted from renderPage.tsx.
 */
export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer: Footer,
  }: PageFrameProps) {
    return (
      <>
        {componentData.fileData.slug === "index" && (
          <section class="homepage-masthead" aria-labelledby="homepage-masthead-title">
            <header class="homepage-masthead__title">
              <h1 id="homepage-masthead-title">{componentData.cfg.pageTitle}</h1>
            </header>
            <div class="index-hero" aria-label="Animated ink diffusion shader">
              <canvas class="index-hero__canvas" data-ink-shader aria-hidden="true"></canvas>
            </div>
          </section>
        )}
        <div class="left sidebar">
          {left.filter(Boolean).map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.filter(Boolean).map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="popover-hint">
              {beforeBody.filter(Boolean).map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <Content {...componentData} />
          <hr />
          <div class="page-footer">
            {afterBody.filter(Boolean).map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="right sidebar">
          {right.filter(Boolean).map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
          {componentData.fileData.slug === "index" && (
            <div class="homepage-editorial-plates" aria-label="Editorial image plates">
              <figure class="homepage-editorial-patch">
                <img
                  src="./static/scaling-field-plate.png"
                  alt="Scaling-field study with rising curves and layered blocks"
                />
              </figure>
            </div>
          )}
        </div>
        {Footer && <Footer {...componentData} />}
        <CopyrightFooter {...componentData} />
      </>
    )
  },
}
