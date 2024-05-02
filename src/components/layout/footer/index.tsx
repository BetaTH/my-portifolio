import { HomeButton } from '@/components/buttons/home-button'

export function Footer() {
  return (
    <footer className="px-6">
      <div className="mx-auto md:flex-col w-[65rem] py-3 max-w-full flex justify-center items-center gap-6">
        <HomeButton />
        <span className="text-gray-dark-600 text-center">
          © 2024 | Designed and coded with ❤️️ by Thielson Almendra
        </span>
      </div>
    </footer>
  )
}
