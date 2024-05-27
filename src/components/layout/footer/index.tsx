import { getScopedI18n } from '@/lib/locale/server'

export async function Footer() {
  const t = await getScopedI18n('footer')
  return (
    <footer className="px-6">
      <div className="mx-auto md:flex-col w-[65rem] sm:h-[6rem] py-3 max-w-full flex justify-center items-center gap-6">
        <span className="dark:text-body-text text-body-text-light text-center">
          © 2024 | {t('text')}
        </span>
      </div>
    </footer>
  )
}
