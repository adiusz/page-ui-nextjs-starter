import clsx from 'clsx';
import Image from '@/components/shared/Image';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import { VideoPlayer } from '@/components/shared/VideoPlayer';
import { forwardRef } from 'react';

/**
 * A simple CSS mask component that fades content top and bottom to transparent
 */
export const FadeMask = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    fadeHeight?: string;
  }
>(({ children, className, fadeHeight = '3rem' }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('overflow-hidden', className)}
      style={{
        maskImage: `linear-gradient(to bottom, transparent 0%, black ${fadeHeight}, black calc(100% - ${fadeHeight}), transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black ${fadeHeight}, black calc(100% - ${fadeHeight}), transparent 100%)`,
      }}
    >
      {children}
    </div>
  );
});

FadeMask.displayName = 'FadeMask';

const LandingPrimaryCtaContent = ({
  className,
  childrenClassName,
  textPosition = 'left',
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  children,
}: {
  className?: string;
  childrenClassName?: string;
  textPosition?: 'center' | 'left';
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        textPosition === 'center'
          ? 'items-center text-center'
          : 'justify-center',
        className,
      )}
    >
      {leadingComponent}

      {titleComponent || (title && (
        <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold md:max-w-2xl">
          {title}
        </h1>
      ))}

      {descriptionComponent || (description && (
        <p className="md:text-lg md:max-w-xl">{description}</p>
      ))}

      <div
        className={clsx(
          'flex flex-wrap gap-4 mt-2',
          textPosition === 'center' ? 'justify-center' : 'justify-start',
          childrenClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * A component meant to be used in the landing page as the primary Call to Action section.
 *
 * A section that shows a title, description and an image.
 * Optionally, it can have actions (children), leading components and a background glow.
 */
export const LandingPrimaryImageCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'left',
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
  imagePerspective = 'none',
  imageShadow = 'hard',
  minHeight = 350,
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  effectComponent,
  effectClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'center';
  imagePerspective?:
    | 'none'
    | 'left'
    | 'right'
    | 'bottom'
    | 'bottom-lg'
    | 'paper';
  imageShadow?: 'none' | 'soft' | 'hard';
  minHeight?: number;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  effectComponent?: React.ReactNode;
  effectClassName?: string;
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow || imagePerspective !== 'none'
          ? 'relative overflow-hidden'
          : '',
        imagePerspective === 'paper' ? 'md:pb-24' : '',
        className,
      )}
    >
      {effectComponent ? (
        <FadeMask
          className={clsx(
            'absolute inset-0 h-full w-full pointer-events-none opacity-50',
            effectClassName,
          )}
          fadeHeight="4rem"
          aria-hidden="true"
        >
          {effectComponent}
        </FadeMask>
      ) : null}

      {imageSrc && withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
          <GlowBg
            className={clsx(
              'w-full lg:w-1/2 h-auto z-0 dark:opacity-50',
              imagePosition === 'center' ? 'top-5' : ' -top-1/3',
              imagePerspective === 'paper' ? 'opacity-70' : 'opacity-100',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'w-full p-6 gap-8 relative',
          imagePosition === 'center'
            ? 'flex flex-col container-narrow'
            : 'grid lg:grid-cols-2 max-w-full container-wide items-center',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
        style={{
          minHeight,
        }}
      >
        <LandingPrimaryCtaContent
          className={clsx(
            'relative z-10',
            imagePosition === 'left' && 'lg:col-start-2 lg:row-start-1',
          )}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>

        {imageSrc ? (
          <>
            {imagePosition === 'center' ? (
              <section className={clsx('w-full mt-6 md:mt-8')}>
                <Image
                  className={clsx(
                    'w-full rounded-md overflow-hidden',
                    imageShadow === 'soft' && 'shadow-md',
                    imageShadow === 'hard' && 'hard-shadow',
                  )}
                  src={imageSrc}
                  alt={imageAlt}
                  width={(minHeight * 2) + 75}
                  height={(minHeight * 2) + 75}
                  // placeholder="blur"
                  // blurDataURL="data:image/jpeg;base64,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ZpJDQ9N8hwdQrEsfiieCziJJBoaVaYkPOXffXXZoDRRgAcZ06ynq66a57IELRRhhIzFcJCRfPDVRO1trS2jMdpEYie4clcwQQwQiGEMAugs7OCzh8MAYdTvOK61ks0RERERERERERERERERERERERERERERERERERERERERERERERERFMztBCBKOfMegVH/Tf8vRc1Dscy+k9B0r1WvtsetIg0O8TPh68qc3KkWezoYWdpDvgPZTLLZUMP5mHma76Saeq09vfbe3+aMgaAnzU6zsLOzoOfD2CsbK7WVkB4YQSMSO+6rEW5SERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF//2Q=="

                />
              </section>
            ) : null}

            {imagePosition === 'left' || imagePosition === 'right' ? (
              <Image
                className={clsx(
                  'w-full rounded-md relative z-10',
                  imageShadow === 'soft' && 'shadow-md',
                  imageShadow === 'hard' && 'hard-shadow',
                  imagePerspective === 'left' && 'lg:perspective-left',
                  imagePerspective === 'right' && 'lg:perspective-right',
                  imagePerspective === 'bottom' && 'lg:perspective-bottom',
                  imagePerspective === 'bottom-lg' &&
                    'lg:perspective-bottom-lg',
                  imagePerspective === 'paper' &&
                    'lg:ml-[7%] lg:perspective-paper',
                  imagePerspective === 'none' ? 'my-4' : 'my-8',
                )}
                alt={imageAlt}
                src={imageSrc}
                width={minHeight + 75}
                height={minHeight + 75}
              />
            ) : null}
          </>
        ) : null}
      </div>

      {footerComponent}
    </section>
  );
};

/**
 * A component meant to be used in the landing page as the primary Call to Action section.
 *
 * A section that shows a title, description and a video.
 * Optionally, it can have actions (children), leading components and a background glow.
 */
export const LandingPrimaryVideoCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'left',
  videoSrc,
  videoPoster,
  videoPosition = 'right',
  videoMaxWidth = 'none',
  videoShadow = 'hard',
  muted = true,
  autoPlay = false,
  startPlay = false,
  controls = false,
  loop = false,
  minHeight = 350,
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  effectComponent,
  effectClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  videoSrc?: string;
  videoPoster?: string;
  videoPosition?: 'left' | 'right' | 'center';
  videoMaxWidth?: string;
  videoShadow?: 'none' | 'soft' | 'hard';
  muted?: boolean;
  autoPlay?: boolean;
  startPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  minHeight?: number;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  effectComponent?: React.ReactNode;
  effectClassName?: string;
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow ? 'relative overflow-hidden' : '',
        className,
      )}
    >
      {effectComponent ? (
        <FadeMask
          className={clsx(
            'absolute inset-0 h-full w-full pointer-events-none opacity-50',
            effectClassName,
          )}
          fadeHeight="4rem"
          aria-hidden="true"
        >
          {effectComponent}
        </FadeMask>
      ) : null}

      <div
        className={clsx(
          'w-full p-6 flex flex-col gap-8 relative z-10',
          videoPosition === 'center'
            ? 'container-narrow'
            : 'max-w-full container-wide grid lg:grid-cols-2 items-center',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
        style={{
          minHeight,
        }}
      >
        <LandingPrimaryCtaContent
          className={clsx(
            'relative z-10',
            videoPosition === 'left' && 'lg:col-start-2 lg:row-start-1',
          )}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>

        {videoSrc ? (
          <>
            {withBackgroundGlow ? (
              <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
                <GlowBg
                  className={clsx(
                    'w-full lg:w-1/2 h-auto z-0 dark:opacity-50',
                    videoPosition === 'center' ? 'top-5' : ' -top-1/3',
                  )}
                  variant={backgroundGlowVariant}
                />
              </div>
            ) : null}

            {videoPosition === 'center' ? (
              <section className={clsx('w-full mt-6 md:mt-8')}>
                <VideoPlayer
                  className={clsx(
                    'w-full rounded-md overflow-hidden',
                    videoShadow === 'soft' && 'shadow-md',
                    videoShadow === 'hard' && 'hard-shadow',
                  )}
                  poster={videoPoster}
                  src={videoSrc}
                  autoPlay={autoPlay}
                  startPlay={startPlay}
                  controls={controls}
                  loop={loop}
                  muted={muted}
                  maxWidth={videoMaxWidth}
                  variant={variant}
                />
              </section>
            ) : null}

            {videoPosition === 'left' || videoPosition === 'right' ? (
              <VideoPlayer
                className={clsx(
                  'w-full rounded-md overflow-hidden',
                  videoShadow === 'soft' && 'shadow-md',
                  videoShadow === 'hard' && 'hard-shadow',
                )}
                poster={videoPoster}
                src={videoSrc}
                autoPlay={autoPlay}
                startPlay={startPlay}
                controls={controls}
                loop={loop}
                muted={muted}
                maxWidth={videoMaxWidth}
                variant={variant}
              />
            ) : null}
          </>
        ) : null}
      </div>

      {footerComponent}
    </section>
  );
};

/**
 * A component meant to be used in the landing page as the primary Call to Action section.
 *
 * A section that shows a title & description.
 * Optionally, it can have actions (children) and a background.
 */
export const LandingPrimaryTextCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'center',
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  effectComponent,
  effectClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  effectComponent?: React.ReactNode;
  effectClassName?: string;
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16 ',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        className,
      )}
    >
      {effectComponent ? (
        <FadeMask
          className={clsx(
            'absolute inset-0 h-full w-full pointer-events-none opacity-50',
            effectClassName,
          )}
          fadeHeight="4rem"
          aria-hidden="true"
        >
          {effectComponent}
        </FadeMask>
      ) : null}

      {withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
          <GlowBg
            className={clsx(
              'w-full lg:w-1/2 h-auto z-0 dark:opacity-50',
              textPosition === 'center' ? 'top-5' : ' -top-1/3',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'w-full p-6 flex flex-col gap-8 relative z-10',
          textPosition === 'center'
            ? 'container-narrow'
            : 'max-w-full container-wide',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
      >
        <LandingPrimaryCtaContent
          className={clsx(
            textPosition === 'center' ? 'items-center' : 'items-start',
          )}
          childrenClassName={clsx(
            textPosition === 'center' ? 'items-center' : '',
          )}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>
      </div>

      {footerComponent}
    </section>
  );
};
