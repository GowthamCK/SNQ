import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import Testimonials from "@/partials/Testimonials";
import Accordion from "@/shortcodes/Accordion";
import { AboutUsItem, RegularPage } from "@/types";
import Link from "next/link";
import { FaHeadset, FaBoxOpen, FaCheckCircle } from "react-icons/fa";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");

  const { frontmatter } = data;
  const {
    title,
    about_us,
    faq_section_title,
    button,
    faq_section_subtitle,
    faqs,
    testimonials_section_enable,
    testimonials_section_title,
    testimonials,
    staff_section_enable,
    staff,
  } = frontmatter;

  return (
    <>
      {/* <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      /> */}

      <PageHeader title={title} />

      <section>
        <div className="container">
          {about_us?.map((section: AboutUsItem, index: number) => (
            <div
              className={`lg:flex gap-8 mt-14 lg:mt-28`}
              key={section?.title}
            >
              {index % 2 === 0 ? (
                <>
                  <ImageFallback
                    className="rounded-md mx-auto"
                    src={section?.image}
                    width={536}
                    height={449}
                    alt={section?.title}
                  />
                  <div className="mt-10 lg:mt-0">
                    <h2>{section?.title}</h2>
                    <p
                      className="mt-4 text-light leading-7"
                      dangerouslySetInnerHTML={markdownify(section?.content)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2>{section.title}</h2>
                    <p
                      className="mt-4 text-light leading-7"
                      dangerouslySetInnerHTML={markdownify(section.content)}
                    />
                  </div>
                  <ImageFallback
                    className="rounded-md mx-auto mt-10 lg:mt-0"
                    src={section.image}
                    width={536}
                    height={449}
                    alt={section.title}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {testimonials_section_enable && (
        <Testimonials
          title={testimonials_section_title!}
          testimonials={testimonials!}
        />
      )}

      

      <section className="section">
        <div className="container">
          <div className="bg-theme-light px-7 py-20 dark:bg-darkmode-theme-light text-center rounded-md">
            <h2>Reasons to shop with us</h2>

            <div className="row justify-center gap-6 mt-14">
              <div className="col-6 md:col-5 lg:col-3">
                <div className="flex justify-center">
                  <FaHeadset size={48} />
                </div>
                <h3 className="md:h4 mt-6 mb-4">24/7 Friendly Support</h3>
                <p>Our support team always ready for you to 7 days a week</p>
              </div>

              <div className="col-6 md:col-5 lg:col-3">
                <div className="flex justify-center">
                  <FaBoxOpen size={48} />
                </div>
                <h3 className="md:h4 mt-6 mb-4">7 Days Easy Return</h3>
                <p>
                  Product any fault within 7 days for an immediately exchange.
                </p>
              </div>

              <div className="col-6 md:col-5 lg:col-3">
                <div className="flex justify-center">
                  <FaCheckCircle size={48} />
                </div>
                <h3 className="md:h4 mt-6 mb-4">Quality Guaranteed</h3>
                <p>
                  If your product are not perfect, return them for a full refund
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="bg-theme-light px-7 lg:px-32 py-20 dark:bg-darkmode-theme-light row mb-14 xl:mb-28 rounded-b-md">
            <div className="col-12 md:col-5 mx-auto space-y-5 mb-10 md:mb-0">
              <h1 dangerouslySetInnerHTML={markdownify(faq_section_title!)} />
              <p
                dangerouslySetInnerHTML={markdownify(faq_section_subtitle!)}
                className="md:text-lg"
              />

              {button?.enable && (
                <Link
                  className="btn btn-sm md:btn-lg btn-primary font-medium"
                  href={button.link}
                >
                  {button.label}
                </Link>
              )}
            </div>

            <div className="col-12 md:col-7">
              <Accordion faqs={faqs!} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
