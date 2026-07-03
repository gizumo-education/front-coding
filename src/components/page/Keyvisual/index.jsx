import styles from './style.module.scss'

// 1. 職種データ
const JOB_TYPES = [
  '医療事務',
  '調剤事務',
  '診療情報管理士',
  '歯科助手',
  '歯科事務',
  '看護補助・看護助手',
  '病院内SE',
]

// 2. 都道府県データ
const LOCATIONS = [
  '茨城県',
  '神奈川県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '栃木県',
]

// 3. 給与データ
const SALARIES = [
  '月給17万〜',
  '月給18万〜',
  '月給19万〜',
  '月給20万〜',
  '月給21万〜',
  '月給22万〜',
  '月給23万〜',
]

// 4. 新着求人データ
const NEW_JOBS_DATA = [
  {
    id: 1,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/icon/poster1.jpg',
  },
  {
    id: 2,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/icon/poster2.jpg',
  },
  {
    id: 3,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/icon/poster3.jpg',
  },
  {
    id: 4,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/icon/poster4.jpg',
  },
]

export const Keyvisual = () => {
  return (
    <section className={styles['keyvisual-section']}>
      <div className={styles['container']}>
        <div className={styles['content']}>
          <img
            className={styles['keyvisual-img']}
            src='/icon/no1.png'
            alt='no.1写真'
            width='140'
            height='65'
          />
          <h1 className={styles['main-title']}>
            医療事務求人を探すならギズジョブ
          </h1>
          <p className={styles['job-count']}>
            現在の求人掲載数 :
            <span className={styles['count-num']}> 2,320</span>件
          </p>
        </div>
      </div>

      <div className={styles['search-form']}>
        <h2 className={styles['sub-title']}>お仕事検索</h2>
        <p className={styles['description']}>
          働きたい環境・地域・希望給与を入れて検索！
        </p>

        <div className={styles['search-conditions']}>
          <select
            className={styles['select']}
            aria-label='職種を選択'
            defaultValue='医療事務'
          >
            {JOB_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            className={styles['select']}
            aria-label='都道府県を選択'
            defaultValue='東京都'
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            className={styles['select']}
            aria-label='給与を選択'
            defaultValue='月給20万〜'
          >
            {SALARIES.map((salary) => (
              <option key={salary} value={salary}>
                {salary}
              </option>
            ))}
          </select>
        </div>

        <div className={styles['group-action']}>
          <input
            type='text'
            placeholder='キーワード・企業名・スキルなど'
            aria-label='キーワード検索'
            className={styles['search-input']}
          />
          <button className={styles['search-button']} type='button'>
            <img
              className={styles['search-img']}
              src='/icon/search.svg'
              alt='検索ボタン'
              width={16}
              height={16}
            />
            検索する
          </button>
        </div>
      </div>

      <div className={styles['new-job']}>
        <h2 className={styles['new-sub-title']}>新着求人</h2>

        <div className={styles['slider-wrapper']}>
          <button
            className={styles['prev-button']}
            type='button'
            aria-label='前へ'
          >
            ＜
          </button>

          <div className={styles['new-job-content']}>
            {NEW_JOBS_DATA.map((job) => (
              <div key={job.id} className={styles['content']}>
                <div className={styles['job-img-wrap']}>
                  <img
                    src={job.imgSrc}
                    alt='求人イメージ'
                    className={styles['job-img']}
                    width={300}
                    height={200}
                  />
                </div>

                <div className={styles['job-info']}>
                  <h3 className={styles['job-card-title']}>{job.title}</h3>

                  <div className={styles['job-meta']}>
                    <div className={styles['meta-row']}>
                      <p className={styles['label-salary']}>給与</p>
                      <p className={styles['meta-text']}>{job.salary}</p>
                    </div>
                    <div className={styles['meta-row']}>
                      <p className={styles['label-location']}>所在地</p>
                      <p className={styles['meta-text']}>{job.location}</p>
                    </div>
                    <div className={styles['meta-row']}>
                      <p className={styles['label-station']}>最寄駅</p>
                      <p className={styles['meta-text']}>{job.station}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={styles['next-button']}
            type='button'
            aria-label='次へ'
          >
            ＞
          </button>
        </div>

        <button className={styles['new-job-button']} type='button'>
          新着求人一覧をもっと見る
        </button>
      </div>

      <div className={styles['middle-banner']}>
        <div className={styles['banner-inner']}>
          <p className={styles['banner-title']}>
            ギズジョブなら理想の職場がきっと見つかる
          </p>
          <p className={styles['banner-sub']}>
            ギズジョブは完全無料の求職者向け求人サービスです。
          </p>
        </div>
      </div>
    </section>
  )
}
