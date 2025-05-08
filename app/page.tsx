'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Kins00様',
    role: '法人営業企画リーダー',
    content: '最初から最後まで、丁寧にお仕事をしてくださりました。またタイトなスケジュールでお願いしたのにも関わらず期限内に期待を上回るアウトプットをご提出いただき本当に感謝しております。レスポンスも迅速で丁寧なので、終始ストレス無く安心してお任せできました。本当にありがとうございました！またエクセルで困った際にはご相談差し上げたいと思いますので、その際は何卒よろしくお願い申し上げます。。',
    image: '/a.png'
  },
  {
    id: 2,
    name: 'うすっち様',
    role: '大手製薬 マーケティング担当',
    content: '今回は、エクセルを使ったデータ処理を依頼させていただきました。とても迅速にご対応いただき、大変助かりました。また、処理方法についてもわかりやすくご教示いただきましたが、大変勉強になりました。エクセルの扱いに関して、とてもプロフェッショナルな方だと思います。また依頼させせていただきたいです。何卒よろしくお願いします。',
    image: '/b.png'
  },
  {
    id: 3,
    name: 'ヤコウ2056様',
    role: 'データサイエンス データエンジニア',
    content: '先程、分析結果を確認させていただきました。こちらの都合で確認が遅くなり返信ができず、大変申し訳ありませんでした。こちらの要望に短期間で丁寧に対応していただき、非常に満足しております。他の方にもぜひともお勧めしたいです。またお願いさせていただくことがあると思いますのでその時はよろしくお願いします。',
    image: '/c.png'
  }
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollToProfile = () => {
    const profileSection = document.getElementById('profile');
    profileSection?.scrollIntoView({ behavior: 'smooth' }); //smooth
  };

  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    worksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden gradient-border"
          >
            <Image
              src="/profile.png"
              alt="プロフィール写真"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-4 gradient-text"
          >
            オフィスツネ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4x1 md:text-2xl text-blue-500 mb-8"
          >
            ポートフォリオサイトへようこそ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProfile}
              className="px-6 py-3 glass-effect rounded-lg transition-all duration-300"
            >
              プロフィール
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToWorks}
              className="px-6 py-3 glass-effect rounded-lg transition-all duration-300"
            >
              作品一覧
            </motion.button>
            <motion.a
              href="https://coconala.com/services/2041171?ref=top_histories&ref_kind=home&ref_no=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300"
            >
              ココナラで依頼する
            </motion.a>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAFIMM-B5xvU4HRdeV5JdumBShLbuwgDWJOcXQLtLwMb-SKg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
            >
              お問い合わせ
            </motion.a>
          </motion.div>
        </motion.div>

        {/* お客様の声セクション */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}                
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                className="glass-effect p-6 rounded-x1"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{review.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* サービス紹介セクション */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">サービス紹介</h2>
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                <div className="flex-[0_0_100%] min-w-0 relative h-[400px]">
                  <Image
                    src="/no1.png"
                    alt="サービス紹介1"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
                <div className="flex-[0_0_100%] min-w-0 relative h-[400px]">
                  <Image
                    src="/no2.png"
                    alt="サービス紹介2"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
                <div className="flex-[0_0_100%] min-w-0 relative h-[400px]">
                  <Image
                    src="/no3.png"
                    alt="サービス紹介3"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
              onClick={scrollPrev}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
              onClick={scrollNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            
            {/* ドットナビゲーション */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    selectedIndex === index ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>

            {/* ココナラボタンを追加 */}
            <div className="text-center mt-8">
              <motion.a
                href="https://coconala.com/services/2041171?ref=top_histories&ref_kind=home&ref_no=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                ココナラで依頼する
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* プロフィールセクション */}
        <motion.section
          id="profile"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">プロフィール</h2>
          <div className="glass-effect p-8 rounded-xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">経歴</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <p className="font-semibold">2020年 - 現在</p>
                      <p className="text-gray-300">フリーランスエンジニア（エクセル業務効率化）</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <p className="font-semibold">2018年 - 2020年</p>
                      <p className="text-gray-300">大手通信会社</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <p className="font-semibold">2015年 - 2018年</p>
                      <p className="text-gray-300">パッケージソフトウェア開発</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">スキル</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">フロントエンド</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">TypeScript</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">バックエンド</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Django</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* サービス内容セクション */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">サービス内容</h2>
          <div className="glass-effect p-8 rounded-xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">エクセル業務効率化</h3>
                  <p className="text-gray-300">
                    ・業務プロセスの自動化<br />
                    ・データ入力・集計の効率化<br />
                    ・マクロ開発・カスタマイズ
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">エクセル研修</h3>
                  <p className="text-gray-300">
                    ・初級から上級までのカスタマイズ研修<br />
                    ・実務に即した実践的なトレーニング<br />
                    ・VBAプログラミング講座
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">データ分析</h3>
                  <p className="text-gray-300">
                    ・ビジネスデータの可視化<br />
                    ・統計分析・予測モデル構築<br />
                    ・レポート作成支援
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">システム開発</h3>
                  <p className="text-gray-300">
                    ・Webアプリケーション開発<br />
                    ・業務システムの構築<br />
                    ・API開発・インテグレーション
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 作品一覧セクション */}
        <motion.section
          id="works"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">作品一覧</h2>
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">今日の運勢 🎍</h3>
                <p className="text-gray-300 mb-6">
                  シンプルで使いやすいおみくじアプリケーション。<br />
                  毎日の運勢を気軽にチェックできます。<br />
                  モダンなデザインと直感的なUIで、楽しく運勢を占えます。
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl mx-auto max-w-2xl">
                <Image
                  src="/omikuji-preview.png"
                  alt="おみくじアプリのプレビュー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <motion.a
                  href="https://www.omikuji.officetsune.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  おみくじを引く！
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* お問い合わせセクション */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">お問い合わせ</h2>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeAFIMM-B5xvU4HRdeV5JdumBShLbuwgDWJOcXQLtLwMb-SKg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            お問い合わせフォームへ
          </motion.a>
        </motion.section>
      </div>
    </main>
  );
}
