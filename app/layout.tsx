import { getLocaleOnServer } from '@/i18n/server'
import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({ children }: { children: React.ReactNode }) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div>
        </div>
        <footer className="footer">
          <p>服务生成的所有内容均由人工智能模型生成，其生成内容的准确性和完整性无法保证，不代表辽宁工程技术大学的态度或观点</p>
        </footer>
      </body>
    </html>
  )
}

export default LocaleLayout

