// ============================================
// 상품 데이터
// ============================================
// 이 파일은 모든 상품 정보를 담고 있는 데이터 객체입니다.
// 베스트 상품, 신상품, 특가 상품으로 구분되어 있습니다.

// 상품 데이터 객체
const productsData = {
    // 베스트 상품 목록
    best: [
        {
            id: 1,
            title: '슬리피 샤워 젤',
            price: 20000,
            salePrice: 18000,
            discount: 20,
            rating: 4.5,
            reviews: 1234,
            image: 'images/sleepy-shower-gel-01.png',
            images: [
                'images/sleepy-shower-gel-01.png',
                'images/sleepy-shower-gel-02.png'
            ],
            badge: 'sale',
            badgeText: '20%',
            description: `
        <h3>포근한 라벤더 향으로 편안한 샤워 타임</h3>
        <p>슬리피 샤워젤은 라벤더와 일랑일랑, 통카가 조화된 부드럽고 달콤한 향으로 하루의 피로를 녹여주는 샤워 젤입니다. 은은하고 아늑한 향기로 샤워 후 기분까지 편안해지는 경험을 선사해요.</p>

        <h4>주요 특징</h4>
        <ul>
            <li>라벤더·통카·일랑일랑이 전하는 포근하고 편안한 향</li>
            <li>부드러운 거품으로 피부를 자극 없이 클렌징</li>
            <li>샤워 후에도 은은하게 남는 잔향</li>
            <li>피부를 건조하지 않게 유지하는 보습력</li>
            <li>감성적인 취침 전 샤워 루틴에 추천</li>
        </ul>

        <h4>사용 방법</h4>
        <ul>
            <li>젖은 피부에 적당량을 덜어 거품을 낸 후 부드럽게 마사지해주세요.</li>
            <li>미온수로 깨끗하게 헹궈주세요.</li>
            <li>수면 전 샤워할 때 사용하면 편안함이 더욱 깊어져요.</li>
        </ul>
    `,
            spec: {
                '제품 타입': '샤워 젤(바디 워시)',
                '주요 성분': '라벤더, 통카, 일랑일랑',
                '사용감': '부드럽고 편안한 샤워 텍스처',
                '향': '포근한 라벤더·바닐라 계열',
                '피부 타입': '건성·중성·민감성 포함 모든 피부',
                '용량': '250g',
                '특징': '보습, 편안함, 은은한 잔향',
                '브랜드': '러쉬(LUSH)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김다영',
                    rating: 5,
                    date: '2024.01.15',
                    content: '샤워할 때마다 라벤더 향이 너무 좋아요. 향이 오래가서 자기 전에 쓰기 딱이에요!',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '박찬희',
                    rating: 4,
                    date: '2024.01.12',
                    content: '향은 정말 만족스러운데, 제 기준엔 조금 달달한 느낌이 있어요. 그래도 편안함이 최고!',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '이민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '향 덕분에 샤워 시간이 힐링이에요. 피부도 안 땅기고 부드러워져서 만족합니다.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '정유진',
                    rating: 4,
                    date: '2024.01.08',
                    content: '잔잔한 향이 오래 남아서 좋아요. 특히 밤 샤워할 때 완전 힐링템!',
                    helpful: 98,
                    verified: false
                },
                {
                    id: 5,
                    author: '오세훈',
                    rating: 5,
                    date: '2024.01.05',
                    content: '편안하고 달콤한 향 덕분에 매일 샤워가 즐겁습니다. 재구매 의사 100% 있어요.',
                    helpful: 267,
                    verified: true
                }
            ]
        },
        {
            id: 2,
            title: '수퍼 밀크 컨디셔닝 헤어 프라이머',
            price: 38000,
            salePrice: 30400,
            discount: 20,
            rating: 4.6,
            reviews: 892,
            image: 'images/super-milk-01.png',
            images: [
                'images/super-milk-01.png',
                'images/super-milk-02.png',
                'images/super-milk-03.jpg'
            ],
            badge: 'hot',
            badgeText: 'HOT',
            description: `         <h3>부드럽고 건강한 머릿결의 시작</h3>         <p>수퍼 밀크 컨디셔닝 헤어 프라이머는 모발에 수분과 영양을 가볍게 채워주며, 엉킴을 부드럽게 풀어주는 데일리 헤어 프라이머입니다.</p>         <h4>주요 특징</h4>         <ul>             <li>코코넛·아몬드·오트 밀크가 모발을 보습하고 영양 공급</li>             <li>엉킴 방지 기능으로 빗질이 쉬워짐</li>             <li>가볍고 산뜻한 제형으로 데일리 사용 적합</li>             <li>컬·웨이브 모발 정돈에 도움</li>             <li>정전기 완화 및 윤기 강화</li>             <li>은은한 시트러스·플로럴 향</li>         </ul>         <h4>사용 방법</h4>         <ul>             <li>샴푸 후 타월 드라이한 모발에 골고루 분사해주세요.</li>             <li>손이나 빗으로 부드럽게 빗질해 모발에 흡수시켜주세요.</li>             <li>드라이 전 또는 자연건조 시 모두 사용 가능해요.</li>         </ul>
    `,
            spec: {
                '제품 타입': '컨디셔닝 헤어 프라이머',
                '주요 성분': '코코넛 밀크, 아몬드 밀크, 오트 밀크',
                '사용 부위': '모발',
                '사용감': '가볍고 산뜻한 미스트 텍스처',
                '향': '시트러스·플로럴 향',
                '용량': '250g',
                '모발 타입': '건성·손상·컬 모발 적합',
                '특징': '엉킴 완화, 보습, 윤기, 정전기 차단',
                '브랜드': '러쉬(LUSH)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김보미',
                    rating: 5,
                    date: '2024.01.14',
                    content: '샴푸 후 뿌리면 모발이 부드러워지고 엉킴이 훨씬 줄어요. 매일 쓰기 좋은 향과 사용감이에요.',
                    helpful: 214,
                    verified: true
                },
                {
                    id: 2,
                    author: '최다은',
                    rating: 4,
                    date: '2024.01.11',
                    content: '컬 모발인데 사용하면 윤기가 돌고 차분해져요. 향은 은은해서 부담 없어요.',
                    helpful: 187,
                    verified: true
                },
                {
                    id: 3,
                    author: '박서준',
                    rating: 5,
                    date: '2024.01.09',
                    content: '건조하고 푸석한 머리에 효과 좋아요. 드라이 전 사용하면 스타일링이 훨씬 쉬워져요.',
                    helpful: 165,
                    verified: true
                },
                {
                    id: 4,
                    author: '이유정',
                    rating: 4,
                    date: '2024.01.07',
                    content: '가볍고 산뜻해서 데일리 미스트처럼 쓰기 좋아요. 모발 정돈도 잘 되고 재구매 의사 있어요!',
                    helpful: 142,
                    verified: true
                }
            ]
        },
        {
            id: 3,
            title: '더티 바디 스프레이',
            price: 70000,
            salePrice: 56000,
            discount: 20,
            rating: 4.8,
            reviews: 567,
            image: 'images/dirty-body-spray-01.png',
            images: [
                'images/dirty-body-spray-01.png',
                'images/dirty-body-spray-02.png',
                'images/dirty-body-spray-03.png',
                'images/dirty-body-spray-04.png',
            ],
            badge: 'sale',
            badgeText: '20%',
            description: `
        <h3>상쾌함이 오래가는 시원한 향</h3>
        <p>더티 바디 스프레이는 시원하고 청량한 민트와 허브 향이 매력적인 러쉬의 베스트 셀러 향수 스프레이입니다. 가볍게 뿌려주기만 해도 깨끗하고 산뜻한 기분을 오래 유지할 수 있어요.</p>

        <h4>주요 특징</h4>
        <ul>
            <li>스피어민트·타라곤·샌달우드가 어우러진 깔끔한 허브 향</li>
            <li>가볍고 산뜻한 바디 미스트 타입</li>
            <li>지속력 좋은 프레시한 향기</li>
            <li>남녀 모두 사용하기 좋은 유니섹스 향</li>
            <li>일상, 운동 후, 샤워 후 등 언제든 사용 가능</li>
        </ul>

        <h4>사용 방법</h4>
        <ul>
            <li>원하는 부위에 1~2회 가볍게 분사해 주세요.</li>
            <li>옷보다는 피부 또는 공기에 뿌리는 것을 추천합니다.</li>
            <li>운동 후 또는 외출 전 상쾌함이 필요할 때 사용하면 좋아요.</li>
        </ul>
    `,
            spec: {
                '제품 타입': '바디 스프레이(향수)',
                '향 조합': '스피어민트, 타라곤, 샌달우드',
                '지속력': '중간',
                '용량': '200ml',
                '사용 부위': '전신',
                '사용감': '청량하고 산뜻한 허브 향',
                '성별': '남녀 공용',
                '브랜드': '러쉬(LUSH)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '박재민',
                    rating: 5,
                    date: '2024.01.13',
                    content: '상쾌한 민트 향이 너무 좋습니다. 운동 후에 뿌리면 기분이 확 살아나요. 지속력도 꽤 있는 편이에요!',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 2,
                    author: '서유리',
                    rating: 5,
                    date: '2024.01.11',
                    content: '향이 정말 깨끗하고 시원해요. 남녀 누구나 잘 어울리는 향이라 데일리로 쓰고 있습니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '김도윤',
                    rating: 4,
                    date: '2024.01.09',
                    content: '향은 정말 좋은데 뿌릴 때 양 조절을 잘해야 해요. 그래도 샤워 후 사용하면 하루 종일 상쾌합니다.',
                    helpful: 156,
                    verified: true
                }
            ]
        },
        {
            id: 4,
            title: '빅 샴푸',
            price: 39000,
            salePrice: 31200,
            discount: 20,
            rating: 4.7,
            reviews: 892,
            image: 'images/big-shampoo-01.png',
            images: [
                'images/big-shampoo-01.png',
                'images/big-shampoo-02.png',
                'images/big-shampoo-03.png'
            ],
            badge: 'sale',
            badgeText: '20%',
            description: `
        <h3>풍성한 볼륨감을 선사하는 씨솔트 샴푸</h3>
        <p>빅 샴푸는 굵은 천일염과 레몬, 해초가 모발에 탄력과 볼륨을 더해주는 러쉬의 인기 샴푸입니다. 가볍고 시원한 클렌징과 함께 모발을 깨끗하게 정리해줘요.</p>

        <h4>주요 특징</h4>
        <ul>
            <li>천일염이 두피 각질을 부드럽게 정리하고 볼륨감 부여</li>
            <li>레몬과 라임 오일이 산뜻한 향과 윤기 제공</li>
            <li>해초 추출물이 모발에 수분·영양 공급</li>
            <li>가볍고 깨끗한 세정력</li>
            <li>기름짐 없는 산뜻한 마무리감</li>
        </ul>

        <h4>사용 방법</h4>
        <ul>
            <li>젖은 모발에 적당량을 덜어 충분히 거품을 냅니다.</li>
            <li>두피를 마사지하듯 문지른 후 미온수로 깨끗하게 헹궈주세요.</li>
            <li>볼륨감이 필요한 날 사용하면 효과적입니다.</li>
        </ul>
    `,
            spec: {
                '제품 타입': '볼륨 강화 샴푸',
                '주요 성분': '해초, 굵은 천일염, 레몬·라임 오일',
                '효과': '두피 정돈, 볼륨 강화, 산뜻한 세정력',
                '향': '상큼한 시트러스 향',
                '사용감': '가볍고 깨끗한 마무리',
                '용량': '300g',
                '모발 타입': '축축 처지는 모발, 볼륨이 필요한 모발',
                '브랜드': '러쉬(LUSH)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '이소민',
                    rating: 5,
                    date: '2024.01.12',
                    content: '머리가 떡지기 쉬운 편인데 이 샴푸 쓰면 하루 종일 가볍고 볼륨감이 살아 있어요. 향도 상큼해서 기분 좋아요!',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '정우성',
                    rating: 4,
                    date: '2024.01.10',
                    content: '천일염 입자가 처음엔 조금 낯설었는데, 쓰고 나면 두피가 정말 시원하고 깔끔합니다. 볼륨도 확실히 생겨요.',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '박해린',
                    rating: 5,
                    date: '2024.01.08',
                    content: '머리 빠지는 느낌 없이 부드럽고 상쾌하게 씻겨요. 세정력이 좋아서 주 2~3회 정도 사용하기 딱 좋아요.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 5,
            title: '쉴드 프로텍팅 헤어 세럼',
            price: 38000,
            salePrice: 30400,
            discount: 20,
            rating: 4.5,
            reviews: 456,
            image: 'images/shield-hear-serum-01.png',
            images: [
                'images/shield-hear-serum-01.png',
                'images/shield-hear-serum-02.png'
            ],
            badge: 'sale',
            badgeText: '20%',
            description: `
        <h3>손상 모발을 보호하는 영양 헤어 세럼</h3>
        <p>쉴드 프로텍팅 헤어 세럼은 고데기 및 드라이기 사용, 외부 자극, 건조함으로부터 모발을 보호해주는 러쉬의 모발 케어 세럼입니다. 가볍고 끈적임 없는 텍스처로 데일리로 사용하기 좋아요.</p>

        <h4>주요 특징</h4>
        <ul>
            <li>아르간 오일이 모발에 윤기와 보습 제공</li>
            <li>코코넛·호호바 오일이 건조한 모발에 영양 공급</li>
            <li>열기구 사용 전 보호 코팅 형성</li>
            <li>상쾌한 시트러스 향</li>
            <li>가볍고 산뜻한 사용감</li>
            <li>푸석함 완화 및 모발 탄력 유지</li>
        </ul>
    `,
            spec: {
                '제품 타입': '헤어 세럼',
                '주요 성분': '아르간 오일, 코코넛 오일, 호호바 오일',
                '효과': '보습, 윤기, 열 보호, 손상 케어',
                '향': '상큼한 시트러스 향',
                '사용감': '가볍고 부드러운 오일 타입',
                '용량': '100g',
                '모발 타입': '건조·손상·열기구 사용 잦은 모발',
                '브랜드': '러쉬(LUSH)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김나연',
                    rating: 5,
                    date: '2024.01.11',
                    content: '드라이 전에 꼭 사용해요! 머릿결이 훨씬 부드럽고 푸석함이 줄어요. 향도 은은해서 데일리로 쓰기 좋아요.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '정유민',
                    rating: 4,
                    date: '2024.01.09',
                    content: '사용감이 가볍고 끈적임이 없어서 좋습니다. 다만 너무 많이 바르면 조금 무거워질 수 있어요.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '최은호',
                    rating: 5,
                    date: '2024.01.07',
                    content: '고데기 사용 많이 하는데 머릿결 보호에 확실히 도움 돼요. 사용하고 나면 윤기가 살아나요!',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 6,
            title: '팬지 바디 로션',
            price: 52000,
            salePrice: 41600,
            discount: 20,
            rating: 4.6,
            reviews: 234,
            image: 'images/pansy-body-lotion-01.png',
            images: [
                'images/pansy-body-lotion-01.png',
                'images/pansy-body-lotion-02.png',
                'images/pansy-body-lotion-03.png'
            ],
            badge: 'sale',
            badgeText: '20%',
            description: `
        <h3>은은한 플로럴 향이 오래 남는 바디 보습 케어</h3>
        <p>팬지 바디 로션은 자스민, 로즈, 베르가못이 조화된 우아한 플로럴 향과 깊은 보습력을 지닌 러쉬의 인기 로션입니다. 가볍고 부드러운 제형으로 피부에 빠르게 흡수되어 촉촉함을 오래 유지해줘요.</p>

        <h4>주요 특징</h4>
        <ul>
            <li>플로럴 계열의 풍부하고 매력적인 향</li>
            <li>피부에 빠르게 스며드는 가벼운 제형</li>
            <li>알로에와 오일 성분이 피부 보습 유지</li>
            <li>끈적임 없이 산뜻한 마무리감</li>
            <li>데일리 보디 케어에 적합</li>
            <li>샤워 후 사용 시 보습 효과 극대화</li>
        </ul>
    `,
            spec: {
                '제품 타입': '바디 로션',
                '주요 성분': '자스민, 로즈, 베르가못, 알로에',
                '사용감': '가볍고 부드러운 크림 텍스처',
                '향': '플로럴·시트러스 조합',
                '효과': '보습, 향 지속, 피부 진정',
                '용량': '225g',
                '피부 타입': '모든 피부',
                '브랜드': '러쉬(LUSH)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '최하은',
                    rating: 5,
                    date: '2024.01.10',
                    content: '진짜 향 때문에 계속 쓰게 돼요. 바르고 나면 하루 종일 은은하게 향이 남아서 기분 좋아요!',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 2,
                    author: '박정훈',
                    rating: 4,
                    date: '2024.01.08',
                    content: '보습력 좋고 흡수도 빨라요. 다만 향이 강한 편이라 취향은 조금 탈 수 있을 것 같아요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 7,
            title: '바스마 바디스크럽',
            price: 22000,
            salePrice: 17600,
            discount: 20,
            rating: 4.8,
            reviews: 678,
            image: 'images/basma-body-scrub.png',
            images: [
                'images/basma-body-scrub.png',
            ],
            badge: 'sale',
            badgeText: '20%',
            description: `
        <h3>매끈하고 부드러운 피부를 위한 바디 각질 케어</h3>
        <p>바스마 바디스크럽은 천연 스크럽 입자와 보습 성분이 조화되어 피부를 자극 없이 부드럽게 관리해주는 바디 스크럽입니다. 묵은 각질을 정돈하고 촉촉한 피부결을 되찾아주는 데 도움을 줘요.</p>

        <h4>주요 특징</h4>
        <ul>
            <li>부드러운 스크럽 입자가 각질을 정돈하고 피부결 개선</li>
            <li>코코넛 버터·오일 성분으로 보습 유지</li>
            <li>샤워 중에도 사용하기 편한 제형</li>
            <li>피부 자극이 적고 부드러운 마사지 효과</li>
            <li>상큼한 향으로 샤워 시간이 더 즐거워짐</li>
            <li>건조한 부위 집중 관리에 적합</li>
        </ul>
    `,
            spec: {
                '제품 타입': '바디 스크럽',
                '주요 성분': '코코넛 버터, 오일, 자연 유래 스크럽 입자',
                '사용감': '부드러운 결 정돈, 촉촉함 유지',
                '향': '상큼한 플로럴·프레시 계열',
                '효과': '각질 제거, 피부결 개선, 보습',
                '용량': '250g',
                '피부 타입': '건성·중성·민감성 포함 대부분의 피부',
                '브랜드': '러쉬(LUSH)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '서지유',
                    rating: 5,
                    date: '2024.01.12',
                    content: '각질이 자극 없이 잘 정리돼요! 샤워 후에도 피부가 촉촉해서 너무 좋아요. 향도 상큼해서 계속 손이 가요.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '최민아',
                    rating: 5,
                    date: '2024.01.10',
                    content: '부드럽게 마사지되면서 각질이 싹 정돈되는 느낌이에요. 건조했던 팔꿈치가 확실히 좋아졌어요.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '강지혁',
                    rating: 4,
                    date: '2024.01.08',
                    content: '스크럽 입자가 거칠지 않아서 민감한 피부도 쓰기 좋습니다. 다만 향이 살짝 강한 편이에요.',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 8,
            title: '대디-오 샴푸',
            price: 22000,
            salePrice: 17600,
            discount: 20,
            rating: 4.4,
            reviews: 345,
            image: 'images/daddy-o-shampoo-01.png',
            images: [
                'images/daddy-o-shampoo-01.png',
                'images/daddy-o-shampoo-02.png',
                'images/daddy-o-shampoo-03.png'
            ],
            badge: 'sale',
            badgeText: '20%',
            description: `
        <h3>보랏빛으로 황변을 잡아주는 샴푸</h3>
        <p>대디-오 샴푸는 퍼플 피그먼트와 해초 성분이 금발, 은발, 애쉬톤의 노란기를 잡아주고 모발에 윤기와 생기를 더해주는 샴푸입니다.</p>

        <h4>주요 특징</h4>
        <ul>
            <li>퍼플 피그먼트로 금발·은발의 노란 기 중화</li>
            <li>레몬·라임 오일을 통한 모발 윤기 부여</li>
            <li>해초 추출물의 수분·영양 공급</li>
            <li>가볍고 산뜻한 세정력으로 개운한 두피 연출</li>
            <li>상큼한 시트러스 플로럴 향의 컬러감 있는 잔향</li>
            <li>쿨톤 헤어 유지에 도움을 주는 퍼플 샴푸</li>
        </ul>
    `,
            spec: {
                '제품 타입': '보랏빛 톤 보정 샴푸',
                '주요 성분': '레몬 오일, 라임 오일, 해초, 퍼플 피그먼트',
                '사용감': '가볍고 산뜻한 거품',
                '향': '베르가못·라임 중심의 상큼한 향',
                '효과': '황변 완화, 윤기 강화, 부드러운 세정',
                '용량': '250g',
                '모발 타입': '금발, 은발, 애쉬톤 모발',
                '브랜드': '러쉬(LUSH)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김예린',
                    rating: 5,
                    date: '2024.01.11',
                    content: '탈색모인데 노란 기가 확실히 줄어들었다. 향도 상큼하고 머릿결도 부드럽게 마무리된다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '박성우',
                    rating: 4,
                    date: '2024.01.09',
                    content: '색 보정 효과가 확실하다. 다만 매일 쓰기엔 조금 건조해질 수 있어 컨디셔너랑 같이 쓰는 게 좋다.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '정유나',
                    rating: 5,
                    date: '2024.01.07',
                    content: '향도 좋고 톤 보정도 잘 된다. 은발 유지하는 사람들에게 진짜 추천한다.',
                    helpful: 156,
                    verified: true
                }
            ]
        },
    ],
    // 신상품 목록
    new: [
        {
            id: 9,
            title: '수퍼페어리 샤워 젤',
            price: 20000,
            salePrice: 20000,
            discount: '',
            rating: 4.5,
            reviews: 2,
            image: 'images/super-fairy-shower-gel-01.png',
            images: [
                'images/super-fairy-shower-gel-01.png',
                'images/super-fairy-shower-gel-02.png',
                'images/super-fairy-shower-gel-03.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>달달한 마법을 담은 샤워 젤</h3>
        <p>폭신한 거품과 함께 달콤한 솜사탕 향이 퍼지는 러쉬 감성의 샤워 젤입니다.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>솜사탕처럼 달콤한 향기</li>
            <li>부드러운 사용감과 풍성한 거품</li>
            <li>샤워 후에도 오래 지속되는 향</li>
            <li>민감한 피부도 사용 가능한 순한 포뮬라</li>
        </ul>
    `,
            spec: {
                '용량': '250g',
                '사용감': '부드럽고 촉촉함 유지',
                '향': '솜사탕 · 바닐라 계열',
                '텍스처': '부드러운 젤 타입',
                '피부 타입': '모든 피부'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '향이 진짜 달콤하고 샤워 후에도 은은하게 유지돼서 기분이 좋아요. 거품도 정말 부드럽습니다!',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '이지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '페어리 특유의 달달한 향이 좋아요. 다만 달달한 향을 싫어하는 분들은 조금 강하다고 느낄 수 있을 것 같아요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 10,
            title: '수퍼 페어리 바디 로션',
            price: 26000,
            salePrice: 26000,
            discount: '',
            rating: 4.6,
            reviews: 2,
            image: 'images/super-fairy-body-lotion-01.png',
            images: [
                'images/super-fairy-body-lotion-01.png',
                'images/super-fairy-body-lotion-02.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>보디에도 퍼지는 페어리의 달콤함</h3>
        <p>솜사탕처럼 달콤한 향기를 그대로 담은 수퍼 페어리 바디 로션입니다. 샤워 후 바르면 온몸을 부드럽게 감싸는 촉촉함과 사랑스러운 향이 오래도록 이어집니다.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>솜사탕 · 바닐라 계열의 달콤한 향기</li>
            <li>가볍게 발리고 끈적임 적은 텍스처</li>
            <li>샤워 후 건조해지기 쉬운 피부를 촉촉하게 케어</li>
            <li>일상에서도 은은하게 퍼지는 러쉬 감성 보디 향기</li>
        </ul>
    `,
            spec: {
                '용량': '250g',
                '사용 부위': '바디 전용',
                '향': '솜사탕 · 바닐라 계열',
                '텍스처': '가벼운 크림 타입',
                '피부 타입': '건성 포함 모든 피부',
                '사용 시점': '샤워 후 물기 제거 후 사용 권장'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김소연',
                    rating: 5,
                    date: '2024.01.15',
                    content: '수퍼페어리 샤워 젤이랑 같이 쓰니까 향이 진짜 오래가요. 로션도 끈적이지 않고 금방 스며들어서 너무 만족입니다!',
                    helpful: 142,
                    verified: true
                },
                {
                    id: 2,
                    author: '이준호',
                    rating: 4,
                    date: '2024.01.12',
                    content: '향이 달달해서 기분 전환용으로 좋아요. 다만 향에 민감한 분들은 처음엔 조금 강하게 느낄 수도 있을 것 같아요.',
                    helpful: 87,
                    verified: true
                }
            ]
        },
        {
            id: 11,
            title: '원스 어폰 어 타임 바디 스프레이',
            price: 80000,
            salePrice: 80000,
            discount: '',
            rating: 4.9,
            reviews: 3,
            image: 'images/once-upon-a-time-body-spray-01.png',
            images: [
                'images/once-upon-a-time-body-spray-01.png',
                'images/once-upon-a-time-body-spray-02.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>한 번 뿌르면 시작되는 동화 같은 하루</h3>
        <p>상큼한 사과와 싱그러운 과일 향이 어우러진 원스 어폰 어 타임 바디 스프레이입니다. 가볍게 뿌려도 기분이 환해지는 상큼한 향기로, 일상에 동화 같은 순간을 선물해 보세요.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>사과를 한 입 베어 문 듯한 상큼한 첫 향</li>
            <li>가볍고 산뜻한 바디 미스트 타입</li>
            <li>끈적임 없이 빠르게 흡수되는 포뮬라</li>
            <li>샤워 후 또는 외출 전, 온몸에 가볍게 사용 가능</li>
        </ul>
    `,
            spec: {
                '용량': '200ml',
                '향': '사과 · 시트러스 계열',
                '사용 부위': '바디 전용',
                '텍스처': '워터 타입 미스트',
                '사용 시점': '샤워 후 또는 외출 전',
                '지속력': '은은한 향기 기준 3~4시간'
            },
            reviewList: [
                {
                    id: 1,
                    author: '박지현',
                    rating: 5,
                    date: '2024.01.18',
                    content: '진짜 사과향 동화 속 주인공 된 느낌이에요. 무겁지 않고 산뜻해서 데일리 바디 향수처럼 쓰기 좋아요!',
                    helpful: 521,
                    verified: true
                },
                {
                    id: 2,
                    author: '최윤호',
                    rating: 5,
                    date: '2024.01.16',
                    content: '샤워 후에 수퍼밀크 샴푸 향이랑도 잘 어울려서 같이 쓰고 있어요. 너무 달달하지 않고 상큼해서 계절 상관없이 사용 가능할 것 같아요.',
                    helpful: 392,
                    verified: true
                },
                {
                    id: 3,
                    author: '김다은',
                    rating: 4,
                    date: '2024.01.14',
                    content: '향은 너무 좋은데 가격이 조금 있어서 아껴 쓰게 돼요. 그래도 재구매 의사는 있습니다!',
                    helpful: 248,
                    verified: true
                }
            ]
        },
        {
            id: 12,
            title: '수퍼밀크 샴푸',
            price: 26000,
            salePrice: 26000,
            discount: '',
            rating: 4.7,
            reviews: 3,
            image: 'images/super-milk-strengthening-shampoo-01.png',
            images: [
                'images/super-milk-strengthening-shampoo-01.png',
                'images/super-milk-strengthening-shampoo-02.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>부드럽고 촉촉한 밀크 샴푸 케어</h3>
        <p>건조하고 푸석해지기 쉬운 모발을 위해 탄생한 수퍼밀크 샴푸입니다. 부드러운 거품과 촉촉한 사용감으로 두피는 산뜻하게, 모발은 매끈하게 케어해 줍니다.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>건조한 모발에 부드러움과 수분감 부여</li>
            <li>가벼운 클렌징으로 두피는 산뜻하게</li>
            <li>매일 사용하기 좋은 순한 포뮬라</li>
            <li>샴푸 후에도 뻣뻣하지 않은 부드러운 마무리감</li>
        </ul>
    `,
            spec: {
                '용량': '250g',
                '타입': '데일리 샴푸',
                '모발 타입': '건성 · 손상 모발 포함 모든 모발',
                '텍스처': '부드러운 젤 타입',
                '사용 빈도': '매일 사용 가능',
                '사용 방법': '젖은 모발에 충분히 거품을 낸 후 두피를 마사지하듯 사용 후 깨끗이 헹궈주세요.'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정민아',
                    rating: 5,
                    date: '2024.01.20',
                    content: '머리 감고 나서도 모발이 덜 뻣뻣해요. 향도 은은해서 부담 없고, 데일리 샴푸로 딱 좋습니다.',
                    helpful: 201,
                    verified: true
                },
                {
                    id: 2,
                    author: '오승현',
                    rating: 4,
                    date: '2024.01.17',
                    content: '두피가 예민한 편인데 자극 없이 잘 맞아요. 컨디셔너랑 같이 쓰면 훨씬 더 부드러워요.',
                    helpful: 143,
                    verified: true
                },
                {
                    id: 3,
                    author: '한유리',
                    rating: 5,
                    date: '2024.01.15',
                    content: '거품도 잘 나고 씻겨 나가는 것도 깔끔해요. 사용하고 나면 머리카락이 덜 부시시해서 만족합니다.',
                    helpful: 128,
                    verified: true
                }
            ]
        },
        {
            id: 18,
            title: '플랙씨드 핸드크림',
            price: 20000,
            salePrice: 20000,
            discount: '',
            rating: 4.6,
            reviews: 3,
            image: 'images/flaxseed-hand-cream-01.png',
            images: [
                'images/flaxseed-hand-cream-01.png',
                'images/flaxseed-hand-cream-02.png',
                'images/flaxseed-hand-cream-03.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>거친 손을 위한 플랙씨드 보습 케어</h3>
        <p>플랙씨드 오일이 함유된 핸드크림으로, 건조하고 거칠어진 손에 깊은 보습을 선사합니다. 끈적임은 줄이고 촉촉함과 보호막은 남겨주는 핸드 케어가 필요할 때 딱 맞는 선택이에요.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>플랙씨드(아마씨) 오일 함유로 풍부한 보습감</li>
            <li>가볍게 스며드는 텍스처로 끈적임 최소화</li>
            <li>손 씻은 후 건조해지기 쉬운 피부에 보호막 형성</li>
            <li>부드럽고 은은한 향으로 사계절 데일리 사용 가능</li>
        </ul>
    `,
            spec: {
                '용량': '100g',
                '사용 부위': '손, 팔 등 국소 부위',
                '텍스처': '부드러운 크림 타입',
                '피부 타입': '건성 포함 모든 피부',
                '사용 시점': '손이 건조할 때 수시로 사용',
                '특징 성분': '플랙씨드 오일, 보습 성분 블렌드'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.11',
                    content: '손이 잘 트는 편인데 이 핸드크림 쓰고 나서 훨씬 덜 거칠어졌어요. 끈적이지 않아서 업무 중에도 계속 바르게 돼요.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영수',
                    rating: 4,
                    date: '2024.01.09',
                    content: '흡수가 빨라서 핸드폰이나 키보드 사용할 때 미끄럽지 않아서 좋아요. 향도 과하지 않고 은은해서 무난하게 쓰기 좋습니다.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 3,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.07',
                    content: '겨울 필수템이에요. 주머니에 항상 넣고 다니면서 수시로 바르고 있어요. 손등이 훨씬 부드러워졌어요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 19,
            title: '스티키 데이츠 헤어 프라이머',
            price: 38000,
            salePrice: 38000,
            discount: '',
            rating: 4.6,
            reviews: 4,
            image: 'images/sticky-dates-hair-prima-01.png',
            images: [
                'images/sticky-dates-hair-prima-01.png',
                'images/sticky-dates-hair-prima-02.png',
                'images/sticky-dates-hair-prima-03.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
       <h3>달콤하게 녹아드는 데이트 향기 프라이머</h3>
       <p>
       스티키 데이츠 헤어 프라이머는 따뜻하게 퍼지는 대추 시럽과 카라멜, 바닐라 노트가 어우러진 달콤한 향을 담아,
       스타일링 전에 모발을 부드럽고 윤기 있게 정돈해주는 제품입니다.  
       푸석한 모발을 매끄럽게 정리해 주면서도 끈적임 없이 가볍게 흡수되어, 데이트 전·외출 전 머릿결 케어에 딱 알맞아요.
       </p>

       <h4>주요 특징</h4>
       <ul>
           <li>대추 시럽·카라멜·바닐라가 어우러진 달콤하고 따뜻한 향</li>
           <li>푸석한 모발을 정리해 윤기와 부드러움 부여</li>
           <li>열 스타일링 전 사용하면 헤어 손상 보호에 도움</li>
           <li>무거움 없이 가볍게 흡수되는 로션 타입 프라이머</li>
           <li>데일리 스타일링 베이스로 사용하기 적합</li>
       </ul>
    `,
            spec: {
                '용량': '150ml',
                '사용 단계': '샴푸 후 타월 드라이한 모발에 사용',
                '모발 타입': '건조 · 손상 모발 포함 모든 모발',
                '텍스처': '가벼운 크림/로션 타입',
                '사용 방법': '모발 중·끝 위주로 소량 도포 후 빗질 또는 손으로 정리',
                '효과': '모발 정돈, 윤기 부여, 스타일링 준비'
            },
            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '드라이 전에 바르고 말리면 머릿결이 훨씬 차분해 보여요. 향도 달달해서 데이트 전에 꼭 쓰고 있어요!',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '정태영',
                    rating: 4,
                    date: '2024.01.08',
                    content: '머리가 푸석해 보일 때 바르면 확실히 덜 부시시해 보여요. 다만 너무 많이 바르면 약간 무거워질 수 있어서 적당량이 중요한 것 같아요.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.06',
                    content: '향이 진짜 매력 있어요. 향 때문에 계속 손이 가고, 머릿결도 정돈돼서 아침 준비 시간이 줄었어요.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '박준호',
                    rating: 4,
                    date: '2024.01.04',
                    content: '곱슬 모발인데 프라이머 바르고 스타일링 하면 좀 더 깔끔하게 유지돼요. 용량이 생각보다 넉넉해서 오래 쓸 수 있을 것 같아요.',
                    helpful: 134,
                    verified: true
                }
            ]
        }
    ],
    // 콜라보 상품 목록
    collab: [
        {
            id: 13,
            title: '헬로키티 앤드 프렌즈 샤워 젤',
            price: 22000,
            salePrice: 22000,
            discount: '',
            rating: 4.7,
            reviews: 23,
            image: 'images/hello-kitty-and-friends-shower-gel-01.png',
            images: [
                'images/hello-kitty-and-friends-shower-gel-01.png',
                'images/hello-kitty-and-friends-shower-gel-02.png',
                'images/hello-kitty-and-friends-shower-gel-03.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>헬로키티와 함께하는 달콤한 샤워 타임</h3>
        <p>헬로키티 앤드 프렌즈 샤워 젤은 사랑스러운 캐릭터 감성과 달콤한 과일·캔디 향기를 담은 샤워 젤입니다. 포근한 거품과 함께 귀여운 향기가 욕실 가득 퍼져 샤워 시간이 더 즐거워져요.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>달콤한 과일·캔디 계열의 사랑스러운 향기</li>
            <li>부드러운 거품으로 피부를 산뜻하게 클렌징</li>
            <li>샤워 후에도 은은하게 남는 향</li>
            <li>아이 같은 감성을 좋아하는 어른들에게도 추천</li>
        </ul>
    `,
            spec: {
                '용량': '250g',
                '향': '과일 캔디 계열',
                '텍스처': '젤 타입',
                '피부 타입': '모든 피부',
                '사용 방법': '물기 있는 피부에 거품을 내어 마사지하듯 씻어낸 후 깨끗이 헹궈주세요.'
            },
            reviewList: [
                {
                    id: 1,
                    author: '홍길동',
                    rating: 5,
                    date: '2024.01.14',
                    content: '향이 진짜 귀여워요 ㅋㅋ 샤워할 때마다 기분 좋아져요. 거품도 부드럽고 건조하지 않아서 마음에 들어요.',
                    helpful: 18,
                    verified: true
                },
                {
                    id: 2,
                    author: '김영희',
                    rating: 5,
                    date: '2024.01.12',
                    content: '헬로키티 좋아해서 샀는데 디자인만 귀여운 게 아니라 향도 달달하고 은은해서 만족해요. 욕실에 두면 인테리어 효과도 있어요.',
                    helpful: 15,
                    verified: true
                },
                {
                    id: 3,
                    author: '이철수',
                    rating: 4,
                    date: '2024.01.10',
                    content: '향이 꽤 달콤한 편이라 처음엔 살짝 진하게 느껴졌어요. 달달한 향 좋아하는 분들한테는 딱일 듯!',
                    helpful: 9,
                    verified: true
                }
            ]
        },
        {
            id: 14,
            title: '헬로키티 앤드 프렌즈 퍼퓸',
            price: 85000,
            salePrice: 85000,
            discount: '',
            rating: 4.8,
            reviews: 7,
            image: 'images/hello-kitty-and-friends-shower-perfume-01.png',
            images: [
                'images/hello-kitty-and-friends-shower-perfume-01.png',
                'images/hello-kitty-and-friends-shower-perfume-02.png',
                'images/hello-kitty-and-friends-shower-perfume-03.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>귀여움과 달콤함을 한 병에 담은 퍼퓸</h3>
        <p>헬로키티 앤드 프렌즈 퍼퓸은 사랑스러운 플로럴과 달콤한 과일 향을 레이어링해, 첫 향부터 잔향까지 귀엽고 포근한 느낌을 선사하는 향수입니다. 데일리로 쓰기 좋은 라이트한 퍼퓸으로, 기분 전환이 필요할 때 한 번씩 뿌려보세요.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>상큼한 과일과 은은한 플로럴이 어우러진 달콤한 향</li>
            <li>무겁지 않고 산뜻한 데일리 퍼퓸</li>
            <li>헬로키티 콜렉터를 위한 소장 가치 높은 디자인</li>
            <li>가방에 넣고 다니기 좋은 사이즈</li>
        </ul>
    `,
            spec: {
                '용량': '50ml',
                '향 계열': '플로럴 프루티',
                '사용 부위': '손목, 귀 뒤, 목선 등',
                '지속 시간': '약 4~6시간 (개인차 있음)',
                '사용 방법': '피부에서 살짝 떨어뜨려 1~2회 분사한 뒤 자연스럽게 흡수시켜 주세요.'
            },
            reviewList: [
                {
                    id: 1,
                    author: '최민수',
                    rating: 5,
                    date: '2024.01.13',
                    content: '향이 진짜 “귀엽다”는 말이 어울려요. 과하지 않고 달콤해서 데일리로 쓰기 좋아요. 병 디자인도 소장 욕구 자극합니다.',
                    helpful: 5,
                    verified: true
                },
                {
                    id: 2,
                    author: '박지영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '헬로키티 좋아해서 샀는데 향도 취향 저격이에요. 은은한 플로럴에 과일향이 살짝 섞인 느낌이라 회사 갈 때도 부담 없어요.',
                    helpful: 4,
                    verified: true
                },
                {
                    id: 3,
                    author: '이준호',
                    rating: 4,
                    date: '2024.01.09',
                    content: '조금 더 진한 향을 좋아해서 살짝 가볍게 느껴지긴 하지만, 데일리용으로는 딱 좋습니다. 선물용으로도 괜찮을 듯해요.',
                    helpful: 2,
                    verified: true
                }
            ]
        },
        {
            id: 15,
            title: '프렌드십 케이크 솝',
            price: 18000,
            salePrice: 18000,
            discount: '',
            rating: 4.6,
            reviews: 34,
            image: 'images/friendship-cake-soap-01.png',
            images: [
                'images/friendship-cake-soap-01.png',
                'images/friendship-cake-soap-02.png',
                'images/friendship-cake-soap-03.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>케이크처럼 달콤한 우정 비누</h3>
        <p>프렌드십 케이크 솝은 잘라서 나누어 쓰고 싶어지는 케이크 모양의 비누로, 달콤한 디저트 향을 담았습니다. 손 씻을 때마다 기분 좋은 향기가 퍼져 친구와 함께 쓰는 선물용으로도 좋은 제품이에요.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>케이크를 연상시키는 달콤한 디저트 향</li>
            <li>풍성한 거품으로 손과 몸을 산뜻하게 세정</li>
            <li>욕실·세면대 인테리어용으로도 예쁜 디자인</li>
            <li>선물용, 우정템으로 활용하기 좋음</li>
        </ul>
    `,
            spec: {
                '중량': '100g 기준 (수작업 특성상 차이 발생 가능)',
                '향': '버터 크림 · 바닐라 디저트 계열',
                '용도': '핸드 솝 및 바디 솝',
                '피부 타입': '일반 피부용',
                '사용 방법': '충분히 거품을 낸 뒤 부드럽게 문지르고 물로 깨끗이 헹궈주세요.'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김태수',
                    rating: 5,
                    date: '2024.01.12',
                    content: '세면대에 두었더니 친구들이 다 뭐냐고 물어봐요. 향도 달콤하고 모양도 너무 예뻐요. 선물용으로도 또 살 예정입니다.',
                    helpful: 14,
                    verified: true
                },
                {
                    id: 2,
                    author: '이미라',
                    rating: 4,
                    date: '2024.01.10',
                    content: '손 씻고 나면 향이 은은하게 남아서 좋아요. 다만 금방 쓰기 아까워서 조금씩 아껴 쓰고 있어요.',
                    helpful: 11,
                    verified: true
                }
            ]
        },
        {
            id: 16,
            title: '바나나아 샤워 크림',
            price: 22000,
            salePrice: 22000,
            discount: '',
            rating: 4.8,
            reviews: 12,
            image: 'images/banananaaa-shower-cream-01.png',
            images: [
                'images/banananaaa-shower-cream-01.png',
                'images/banananaaa-shower-cream-02.png',
                'images/banananaaa-shower-cream-03.png'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
        <h3>바나나 밀크처럼 부드러운 샤워 크림</h3>
        <p>바나나아 샤워 크림은 달콤한 바나나와 크리미한 밀크 향을 담은 샤워 크림으로, 피부를 촉촉하게 감싸주는 부드러운 사용감을 자랑합니다. 바디 워시와 보습을 한 번에 케어하고 싶은 날에 사용해 보세요.</p>
        <h4>주요 특징</h4>
        <ul>
            <li>바나나 밀크를 연상시키는 달콤하고 포근한 향</li>
            <li>샤워 후에도 당김을 줄여주는 크리미한 텍스처</li>
            <li>거품이 부드럽게 나며 피부에 촉촉한 마무리감 부여</li>
            <li>아침·저녁 데일리 샤워용으로 사용 가능</li>
        </ul>
    `,
            spec: {
                '용량': '250g',
                '향': '바나나 · 밀크 계열',
                '텍스처': '크림 타입 샤워 워시',
                '피부 타입': '건조·보통 피부',
                '사용 방법': '물기 있는 피부에 적당량을 덜어 거품을 내어 마사지 후 깨끗이 헹궈주세요.'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.13',
                    content: '진짜 바나나우유 향 나요! 달달하지만 부담스럽지 않고, 샤워 후에도 피부가 당기지 않아서 잘 쓰고 있어요.',
                    helpful: 8,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 5,
                    date: '2024.01.11',
                    content: '거품도 부드럽고 향도 따뜻해서 겨울에 특히 잘 어울리는 샤워 크림이에요. 샤워할 때마다 기분 좋아집니다.',
                    helpful: 6,
                    verified: true
                },
                {
                    id: 3,
                    author: '이미영',
                    rating: 4,
                    date: '2024.01.09',
                    content: '향이 꽤 달콤해서 호불호는 있을 것 같아요. 저는 바나나향 좋아해서 만족! 건조한 피부에도 자극 없이 잘 맞아요.',
                    helpful: 4,
                    verified: true
                }
            ]
        }
    ]
};

// ============================================
// 상품 데이터 조회 함수
// ============================================

// 모든 상품을 가져오는 함수
function getAllProducts() {
    return [...productsData.best, ...productsData.new, ...productsData.collab];
}

// 상품 ID로 특정 상품을 찾는 함수
function findProductById(productId) {
    return getAllProducts().find(p => p.id === productId);
}

// 전역에서 접근 가능하도록 window 객체에 노출
window.productsData = productsData;
window.findProductById = findProductById;
window.getAllProducts = getAllProducts;
