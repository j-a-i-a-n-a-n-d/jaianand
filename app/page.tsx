import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
    const now = new Date();
    const timeZoneIndia = 'Asia/Kolkata';
    const dateTimeFormatIndia = new Intl.DateTimeFormat('en-US', {
        timeZone: timeZoneIndia,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    const formattedDateTimeIndia = dateTimeFormatIndia.format(now);
    const [hours, merdian] = [formattedDateTimeIndia.slice(0, 2), formattedDateTimeIndia.slice(9)];
    console.log(hours, merdian);
    
    const _dayStyles = "bg-[rgb(255,255,255)] text-[rgb(38,38,38)] h-screen snap-y snap-mandatory z-0 overflow-scroll overflow-x-hidden";
    const _nightstyles = "bg-[rgb(38,38,38)] text-[rgb(255,255,255)] h-screen snap-y snap-mandatory z-0 overflow-scroll overflow-x-hidden";
    return (
        <div className={_nightstyles} > { /*(parseInt(hours) > 5 && merdian == "PM") ? _dayStyles : */}
            <Navbar />
            <Hero />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae quas fugit nisi ab maxime eius error, amet itaque numquam voluptas. Quidem laudantium tenetur laborum molestiae a, obcaecati eum itaque.
            Cumque, delectus nulla quis similique perferendis reprehenderit a expedita ullam incidunt laboriosam quasi recusandae odit consequuntur repudiandae quibusdam, amet eaque officia tempore. Natus amet eos soluta corrupti. Ab, maiores corporis?
            Nulla ratione commodi, nam provident excepturi aspernatur dicta? Distinctio, odit laboriosam tenetur ducimus nemo iste ea architecto iure, explicabo aut consequuntur unde. Officiis dolore necessitatibus et minima id placeat non?
            Numquam debitis asperiores ut amet atque, magnam dolores quam nobis odit inventore accusantium corrupti eos praesentium, libero rerum facilis eius ab ad in consequuntur eligendi! Saepe mollitia ea maxime fugiat.
            Quo error autem aliquam nemo voluptates accusantium et, corrupti perspiciatis hic, consequatur porro commodi placeat, cum accusamus quaerat! Recusandae laborum vitae voluptatum perferendis maxime expedita cum accusantium nam reprehenderit tempora?
            Laudantium, incidunt recusandae quidem porro praesentium ad explicabo earum nam maiores doloribus accusantium provident blanditiis fugiat ut ex ratione autem, aliquam sed eaque modi. Illum molestias aliquam laborum soluta fugit.
            Labore dicta quidem exercitationem doloribus natus sequi esse vero magnam similique aliquam necessitatibus quae iusto provident eius culpa ad dolorem corporis, quod voluptas eaque, porro mollitia ab ratione nulla? Architecto.
            Ducimus totam mollitia esse, labore fugiat maxime nobis eaque, hic magni, dolorem odio natus praesentium deleniti. Iure distinctio atque odit quo soluta sint voluptate exercitationem cupiditate voluptatibus dolor, dolores porro.
            Mollitia quos corporis repellat, beatae laborum optio dolores quia sequi at cum natus illo alias! Vel provident ipsam eaque ab, nemo exercitationem reiciendis dolor itaque nobis totam ea aliquid odio.
            Ducimus fugiat iste molestias delectus perferendis soluta nobis expedita! Similique incidunt culpa harum non odio alias? Totam illo itaque, accusamus reprehenderit voluptatibus doloribus distinctio impedit, fugiat blanditiis, laborum quasi perspiciatis!
            Quibusdam dicta consequatur voluptatem dolor corrupti dignissimos, magnam ipsa earum aspernatur eaque cupiditate iusto, maiores enim mollitia obcaecati laborum. Optio harum debitis ipsa veritatis, quos distinctio numquam! Et, eligendi deleniti!
            Consequuntur, ex! Cupiditate explicabo, dolore itaque, maiores blanditiis nobis nesciunt excepturi ut est velit sequi voluptatum, consectetur omnis totam temporibus sapiente ullam! Cumque inventore repudiandae libero! Provident mollitia explicabo quaerat.
            Delectus voluptatem alias corrupti eius! Perspiciatis nam sit dolorum ratione quis mollitia odit, ducimus fuga quisquam magni porro ipsa tempore vitae! Nihil quaerat libero distinctio odit nemo vero eveniet impedit?
            Voluptate consequuntur iusto corporis officiis debitis obcaecati distinctio magnam? Obcaecati sed, repudiandae dolorem ullam, laborum alias provident doloremque ipsa doloribus inventore dignissimos et at, perferendis quo voluptatem reprehenderit vitae! Deleniti?
            Libero animi eius unde ipsum quod eos alias, ducimus asperiores vel. Maiores cum non temporibus veritatis impedit commodi cumque molestiae nostrum repellendus. Maxime earum debitis deserunt fuga accusantium assumenda cupiditate!
            Tempore atque officiis, fugiat libero pariatur delectus inventore, deserunt saepe corrupti quidem quia dolore sapiente obcaecati magnam aspernatur eos suscipit rem ducimus, deleniti magni. Accusamus quaerat tempore dolorem perspiciatis earum!
            Modi, unde omnis corrupti deserunt debitis dolores non eius, necessitatibus odio architecto fugit ab tempora blanditiis obcaecati eligendi a autem iste saepe enim illum doloribus ad harum qui laborum. Est?
            Debitis, autem distinctio. Deleniti optio neque ipsum eum molestias asperiores? Obcaecati laborum dolore debitis at odit sunt animi magni dolor dicta sequi corporis, sit quidem consectetur assumenda deleniti eius nesciunt?
            Praesentium cum quas repellat perspiciatis repellendus impedit autem magni aspernatur, id consectetur, voluptas illo quidem? Ipsum cupiditate et obcaecati, culpa dolorem ducimus quo id quis distinctio ipsam ullam dicta nisi.
            Eum, facere alias non soluta distinctio maxime eaque voluptatem cupiditate consectetur animi vero? Odio at, non consectetur, aliquam maiores aperiam tempora, illo accusamus ducimus itaque quae architecto! Nulla, libero cumque?
            Accusamus sed alias tempora, distinctio nesciunt nemo, odit illo fugiat voluptas reiciendis facilis excepturi deserunt eveniet voluptatum odio incidunt mollitia repellendus, modi omnis nisi earum. Aliquam tempora corrupti molestias nisi?
            Distinctio eligendi quam dignissimos temporibus numquam quas voluptatibus a dolorem blanditiis quos dolores, magni harum rem et aperiam cum adipisci quae voluptate maiores animi saepe fugit repudiandae dolore deserunt! Mollitia.
            A amet sit eius vero cumque ducimus natus fugiat alias libero! Maiores recusandae labore officia facere fugit tempora dicta, vel sed veritatis. Neque dignissimos architecto eum facilis sint soluta! Sit.
            Reiciendis ratione animi non eligendi illo blanditiis similique saepe impedit porro sed fuga nulla ut adipisci obcaecati incidunt dicta dignissimos asperiores, cumque consequuntur magnam. Obcaecati esse molestias fugit unde inventore!
            Autem dolore ut nihil at error asperiores dolorum doloremque ipsam modi obcaecati quisquam eveniet id, exercitationem laudantium! Dolore necessitatibus consequatur ea dolores, ut, cum recusandae quas similique quod enim saepe.
            Sequi, temporibus quae in cumque earum molestias quaerat quo assumenda animi accusamus suscipit saepe aspernatur quasi, rem quis ratione modi. Dolor deserunt ut sed commodi architecto tempora sit id! Harum.
            Quae voluptatem laboriosam esse qui minima odit reiciendis? Dolore cupiditate ex laboriosam voluptate! Eveniet tempore amet deserunt doloribus quo dolor? Magni repellendus provident quia laborum asperiores ipsa molestias iusto consectetur?
            Reprehenderit illo praesentium magni eum odit vitae maiores non temporibus nostrum sequi vel reiciendis aut dolor repudiandae neque a, adipisci aspernatur veniam minus alias asperiores fugiat vero. Nisi, adipisci laudantium!
            Quibusdam natus autem praesentium, perspiciatis eum nesciunt, odit dolores corporis culpa illo odio. Rerum iure in error deserunt maiores voluptatem iusto consequuntur possimus veritatis debitis illo at, mollitia ex recusandae?
            Repellat dolore mollitia iure unde? Unde animi esse voluptatem vitae, quis provident maiores temporibus alias, atque porro corrupti reiciendis neque suscipit enim fuga dicta eveniet ullam est, tenetur omnis dolor.
            Eaque rerum officia explicabo excepturi debitis nulla consequuntur illum dolores ipsum quo sit aperiam, officiis, quae cupiditate eum animi sapiente distinctio natus. Nostrum, quia molestias. Voluptas deleniti maxime sapiente quis.
            Doloremque deleniti quos, nisi modi aperiam officiis placeat perferendis a excepturi rerum temporibus tempora dolorum. Quisquam enim voluptatibus harum placeat ex iusto hic natus, quas minima doloribus reiciendis sapiente fugit?
            Repudiandae perferendis voluptatum et pariatur perspiciatis obcaecati minus a. Similique eligendi deleniti quibusdam dicta, placeat molestiae optio delectus iusto hic quaerat a quidem! Ex blanditiis nobis, veritatis earum at consequuntur.
            Itaque vitae expedita aperiam, praesentium deserunt molestias tempore reiciendis voluptatum suscipit deleniti aut vero dicta facere natus ipsam. Doloribus laudantium nemo sapiente ipsum veniam. Praesentium amet numquam repellat quidem odit.
            Natus nemo saepe, id dolore, necessitatibus similique molestias voluptatem, neque qui quia illo provident illum earum eum reprehenderit ex fuga nulla alias laboriosam odit! Provident nam tempora nemo cumque obcaecati.
            Quo ipsam veniam perferendis atque voluptas dolores quibusdam, possimus deserunt tenetur inventore id, earum nostrum illum iste quos minima doloribus vero nemo porro voluptatum. Enim laboriosam fuga deserunt hic! Quod.
            Praesentium dolorem inventore blanditiis pariatur exercitationem saepe, architecto excepturi debitis! Qui veritatis consequatur quaerat culpa expedita fugiat, enim beatae ducimus iste labore numquam maiores corrupti cupiditate, necessitatibus dolore, sit exercitationem.
            Quo neque reiciendis, esse blanditiis ipsum architecto dolorem ullam vero aperiam voluptate porro quas ducimus itaque ipsa doloribus reprehenderit modi dolorum amet assumenda vitae, consectetur exercitationem animi. Labore, magni atque.
            Recusandae cupiditate illo, tempora aliquid praesentium accusantium quos veniam cumque totam suscipit illum quas pariatur unde vitae perferendis laboriosam repudiandae alias itaque eius quis minus porro amet explicabo! Facere, inventore?
            Laboriosam neque debitis officiis placeat incidunt nihil itaque dolores ipsum possimus, quidem iste totam temporibus voluptatibus odit reprehenderit, sit deserunt beatae? Vero illo dolorem modi culpa possimus doloremque voluptas similique!
            Sequi voluptatem sed sapiente officia, iure quaerat, cum rerum ex, facilis iste eum voluptate aperiam quas! Cupiditate perspiciatis minima maxime et veritatis eius. Ab tenetur at porro temporibus eligendi error.
            Molestiae libero unde rerum soluta dolor ad eaque dolorum aspernatur voluptatem possimus, natus, at laborum inventore voluptates in commodi, facere iste. Tenetur, iure? Esse, accusamus. Eligendi iure vitae molestias unde.
            Hic voluptate eveniet repudiandae aut sequi voluptates explicabo? Rem cumque modi libero at nam, quo distinctio ut doloremque asperiores corrupti quidem neque, atque voluptate quaerat expedita a, quasi illo dignissimos?
            Voluptatibus nemo tenetur impedit ullam qui eum animi odio, mollitia adipisci delectus exercitationem sint possimus quisquam, ex incidunt nam quidem quas deserunt culpa unde rem iste quia? Quae, quisquam fuga?
            Commodi adipisci reprehenderit a in non totam delectus enim, blanditiis autem perspiciatis eligendi veniam repudiandae exercitationem rem eum minima eos ab labore nemo! Cupiditate omnis quas ad, cum ratione fugiat.
            Magnam quae at quod fugiat incidunt iure ipsam voluptatem necessitatibus quibusdam ut itaque ipsa sed adipisci eligendi beatae, aut deleniti quo. Cupiditate soluta eligendi veniam iure hic iste molestias doloribus.
            Voluptate, expedita. Repudiandae accusantium ipsa mollitia dicta fugit officia nam ducimus explicabo quos rem! Quo at enim ducimus doloremque illum suscipit veritatis iure unde reprehenderit, modi sequi ad voluptatibus accusantium.
            Temporibus, aliquam amet at doloribus maiores veniam, repellendus obcaecati harum sunt dolore consectetur dolorum? Molestias, quibusdam et commodi, soluta autem dolorem quia, enim rerum tempore velit quae corporis molestiae ut.
            Distinctio architecto rerum sunt unde? Possimus dolores in voluptates tempora sequi ut voluptatem nemo neque sunt. Hic inventore dolorem, provident corrupti earum maxime sint rem placeat minus minima quaerat alias!
            Harum cumque placeat laborum asperiores itaque iste qui molestias optio ipsum reprehenderit illo modi molestiae eum necessitatibus beatae possimus aperiam obcaecati earum doloribus soluta nam, excepturi alias aliquid? Eaque, at.
            Esse enim error ex ipsam, amet labore, architecto distinctio dolorum natus fugit atque. Hic eum, eligendi voluptatibus rem officiis sint pariatur velit ipsa, aut, quibusdam ducimus nihil! Sit, animi accusantium.
            Sapiente voluptatem assumenda optio! Saepe maiores at repellat maxime quia repudiandae incidunt voluptate animi quisquam pariatur cum amet accusantium a quam, blanditiis, minima quaerat ullam modi error quas autem dignissimos.
            Doloremque nemo vel, nihil error soluta, laborum omnis fuga voluptatem beatae dolores, alias laudantium quae quia id facere ea dolor distinctio. Impedit a perspiciatis quasi veniam commodi laborum minus sunt.
            Pariatur explicabo ipsa doloremque ducimus repellat facilis assumenda! Corporis quo atque libero dolores omnis consequuntur reiciendis consequatur vitae molestiae ut veritatis similique voluptatibus rem laudantium, repellendus iste soluta ea itaque.
            Repellendus ad, porro labore necessitatibus, incidunt perspiciatis facilis magni, distinctio rerum eligendi cupiditate eos quisquam odit blanditiis? Minus deserunt quos voluptate, porro, repudiandae a necessitatibus aliquid, non ab consequuntur similique.
            Velit, aspernatur iusto tempora quisquam dolor sed labore est eum, neque mollitia possimus illum! Accusantium voluptatem ab porro cumque facilis quia dolorem aspernatur totam sit, vel, aperiam voluptatibus laudantium ut!
            Tenetur quisquam vel odio dolor voluptates iure eos, voluptatem, sed temporibus quas repellendus assumenda illo accusamus! Accusamus asperiores non aliquid explicabo soluta voluptate, cum impedit, at fuga animi repudiandae quos.
            Ratione, cum. Architecto voluptate ea veniam deleniti pariatur modi quis odio tempora ut. Velit autem tenetur quae at. Alias aperiam voluptatibus facere quam placeat ullam expedita non, architecto blanditiis asperiores.
            Aliquam eos aperiam vitae iste dolore voluptatum harum necessitatibus libero qui sint blanditiis excepturi hic delectus a recusandae quos, repudiandae possimus quisquam. Dolor sequi et delectus dolorem, blanditiis hic repellendus.
            Saepe fuga beatae asperiores tempore possimus eaque minus, placeat praesentium. Reiciendis error aut ex necessitatibus repellat consectetur nemo. Quisquam ipsum placeat eligendi dolorum exercitationem ipsam ad quasi dolor nihil molestias.
            Est iusto voluptatibus quos atque quaerat. Natus nulla nemo id est rerum dolor aspernatur reprehenderit, excepturi praesentium velit ab. Cum recusandae minima ab corporis pariatur asperiores voluptatum mollitia obcaecati dolore.
            Consequuntur porro dolorum deleniti magni laborum iusto tenetur atque, voluptate possimus quas minima ab ad aperiam, totam ratione repellendus, quam error iure adipisci asperiores accusantium iste doloribus placeat quis? Rerum.
            Autem culpa atque recusandae? Nemo illum minima expedita tempore eaque est voluptates, ducimus pariatur quod cumque rem provident, nesciunt blanditiis ut qui vero quia adipisci unde explicabo et, similique commodi!
            Nemo a ab facilis? Commodi, perspiciatis soluta. Architecto ullam numquam error harum iusto consequatur nisi eaque, mollitia perferendis vel! Fugiat itaque eius fuga quos quidem iure a soluta voluptates dolorem?
            Autem quasi minima vero eligendi consequatur id similique enim. Non facilis, delectus consequuntur, nulla enim debitis quasi sint laudantium dolorum consequatur est quaerat nobis ea aperiam fugiat reiciendis quisquam dolor.
            Quis nulla ducimus, delectus deleniti quibusdam vitae sed quidem debitis praesentium dolor corporis ratione vero dolore consequuntur beatae voluptatem iure harum. Hic dolores libero quis dicta deserunt ipsum quibusdam blanditiis.
            Soluta at cum molestias facere quo illum consectetur numquam magni, atque ut necessitatibus praesentium odio consequatur molestiae vel expedita ipsa corporis. Quaerat ea quis ipsum iste enim dignissimos fuga? Perferendis.
            Consequatur neque omnis asperiores velit optio autem mollitia. Vel accusamus facere corrupti est mollitia adipisci officia odio minima, voluptatem sint exercitationem, vitae architecto distinctio modi sit earum dolorum suscipit voluptatibus.
            In nostrum laudantium vel facere suscipit odit, temporibus dignissimos maiores ratione! Vero porro rerum atque odio? Placeat quidem ad quos omnis vitae. Tempore nulla, recusandae unde quidem adipisci dolore veniam?
            Repellendus laudantium quod ea non illum nemo ab, commodi laboriosam soluta quaerat excepturi eveniet praesentium, eaque assumenda ex earum maiores perferendis magni? Facilis, similique iure reprehenderit praesentium dolor quaerat veritatis!
            At necessitatibus modi unde eaque, commodi blanditiis laboriosam in impedit ut sint quibusdam aspernatur veniam, ab iste, quia eum error quidem dolorem laborum illo facere. Ab, numquam! Eos, aliquid quisquam?
            Molestias possimus voluptate error ex voluptatum voluptatibus fugiat incidunt dolor fuga magnam distinctio ab eligendi mollitia a iure cumque blanditiis minima dicta ipsa beatae, aut quibusdam nemo? Magnam, alias iure.
            Nostrum cumque possimus excepturi impedit placeat dolore quos aspernatur suscipit ipsam explicabo, vitae minima mollitia culpa reiciendis, totam consequuntur adipisci nemo fugit! Exercitationem perspiciatis dolorum iste maxime, accusamus voluptatem fuga.
            Laboriosam deserunt sapiente, blanditiis, reiciendis aliquid modi eos, nesciunt quisquam et alias suscipit beatae praesentium dolore odio temporibus. Tenetur placeat libero qui soluta amet repellat repellendus beatae, porro id ad?
            Facilis optio ipsam autem nesciunt reiciendis quaerat repellat ex distinctio adipisci tempore dicta qui dignissimos dolore impedit, a cumque accusantium cupiditate! Neque perferendis quaerat repudiandae mollitia magni tempora ullam nihil?
            Voluptatibus facilis commodi est et ipsam distinctio accusamus ad odit aut, eos minus, architecto doloremque libero deleniti officia, magnam ipsum nihil vel alias perferendis rem. Odit exercitationem atque consequatur corrupti.
            Quidem totam eaque veritatis officiis dolor, molestiae ipsam perspiciatis cum excepturi soluta, quibusdam obcaecati numquam commodi voluptatum aspernatur sequi similique consequatur id temporibus magnam culpa voluptatem nostrum facere. Nam, iusto!
            Magnam debitis voluptas optio ea ut laborum placeat dolorem, ducimus velit, veniam impedit sed eius voluptates dolore! Officia obcaecati expedita repudiandae commodi! Sequi velit accusantium minus asperiores accusamus iusto culpa?
            Repellat ad consequuntur quas laboriosam nostrum consectetur nemo, illo culpa optio quisquam dolore? Molestias ipsum saepe alias repudiandae nisi in nihil consequuntur assumenda placeat sequi repellat necessitatibus dolores, explicabo beatae.
            Consequatur nobis impedit ipsum excepturi quas repudiandae, eius maiores alias autem est accusamus doloremque inventore voluptatibus reprehenderit dolores officiis suscipit exercitationem sunt voluptas quia esse. Neque fuga repudiandae quibusdam velit!
            Perspiciatis eveniet ipsam nam minus animi beatae facere eaque hic, unde earum odit eos aliquam laboriosam officia illo quaerat aliquid harum error corrupti magnam totam repudiandae! Doloremque minima fuga aspernatur.
            Ipsum tempora ex voluptatem labore est, aliquam quos pariatur voluptates possimus exercitationem facilis esse soluta quae quam maiores laboriosam cupiditate impedit, eveniet fuga, doloremque aut maxime ab vero. Nesciunt, enim?
            Fugiat vel doloremque at numquam soluta qui incidunt ullam natus. Suscipit qui praesentium beatae! Velit dolores ullam hic necessitatibus cupiditate sequi exercitationem animi ex at, labore, tempora earum magni recusandae?
            Laudantium maxime facere nisi blanditiis eius distinctio quasi accusamus voluptate laboriosam veritatis. Doloribus cupiditate, libero cum exercitationem inventore, laborum rem expedita dicta quae, beatae dolore fugit deserunt magni error aut.
            Nihil quas tempora, eius natus nostrum molestias fugiat est eos velit quibusdam repellendus facere quisquam quam accusantium sunt! Aut optio aliquam omnis labore nemo in. Ad mollitia porro ab consectetur.
            Dolore, mollitia tempore ipsa facere eos, libero impedit doloremque cupiditate magni, quis est. Consectetur eligendi voluptas sit dolore. Debitis cum magni, quia fugiat officia quod rem nulla laboriosam tenetur? Facilis.
            Fuga voluptates maiores commodi natus debitis tempore consequuntur! Tempora accusantium alias unde maxime quibusdam maiores, rerum totam mollitia impedit debitis eaque. Adipisci ullam laboriosam illo vero neque eos ipsum temporibus.
            Asperiores, enim beatae adipisci harum ullam ipsa dolores dolor provident, facere deleniti ex nemo veniam molestias ipsum. Esse officia doloremque dolore iure iste, ex cupiditate accusamus tempore sit earum nobis!
            Quas ab, laboriosam aliquid id dolorem reiciendis nulla exercitationem quae architecto officia unde explicabo et vitae officiis voluptate sed? Deserunt expedita aliquid possimus? Voluptas tenetur magni eius aliquam temporibus facilis!
            Quam nostrum quas ex placeat ipsam voluptates adipisci dignissimos nesciunt nisi a, aut doloribus quia tenetur, possimus voluptas odit alias ducimus! Temporibus quidem veniam maiores omnis harum reprehenderit molestias eius?
            Enim eos eum veritatis ipsum perferendis corporis excepturi voluptatem quos deserunt commodi sint, cumque nobis dicta reprehenderit blanditiis architecto? Sint totam dolorem dicta aut earum minima eius, ducimus neque ut.
            Placeat unde libero id ut voluptatum at consequuntur, animi fugiat aliquam harum perspiciatis veniam autem eaque? Doloribus iusto eius quam quasi similique molestiae, cumque aperiam accusantium nihil corrupti sit quidem!
            Accusantium consequuntur similique repudiandae ad nam delectus minima in blanditiis nesciunt. Obcaecati reprehenderit, ipsum voluptates quasi magni nam nulla praesentium animi consectetur, iusto fugiat totam mollitia dolores, cum laboriosam earum.
            Necessitatibus eveniet, esse nemo iste perspiciatis nam eos sunt aperiam expedita dolorum nisi aliquam. Vitae nam, sit maiores ipsam maxime itaque eos voluptate necessitatibus repellendus nisi laudantium iure, rem laboriosam.
            Consequatur numquam rerum nostrum, voluptatibus sint consectetur pariatur placeat eos. Aliquam sint adipisci aut et odio sequi. Mollitia optio minus, animi soluta pariatur dolores blanditiis at explicabo ducimus voluptas similique?
            Officia vitae in quibusdam at fuga dignissimos, assumenda, non earum ut iste obcaecati ratione deserunt itaque. Eius sed autem accusantium consequuntur neque placeat nihil itaque tempora repellendus, amet, incidunt perspiciatis.
            Saepe quibusdam iste corrupti veritatis, nostrum repudiandae porro rem odit dolores perferendis beatae? Cum unde, dicta nisi consectetur exercitationem repellat voluptatem ipsum facere animi. Ratione error maiores aut delectus minima?
            Perspiciatis vitae, quam possimus molestiae distinctio quis soluta repellat praesentium consectetur. Molestiae totam tenetur, unde placeat fuga corporis fugiat voluptatibus magnam distinctio rem aperiam pariatur inventore incidunt labore omnis commodi?
            Nisi, pariatur ducimus quis magni voluptate esse velit quibusdam exercitationem accusantium quaerat eum, dolorem nobis et doloribus aut corporis rem quos, dolor consectetur consequatur minima laboriosam! Minus explicabo officia eligendi!
            Enim nulla cupiditate ipsa tempore dicta, ducimus fugit et quisquam sint est alias tempora molestiae, corporis autem neque ex exercitationem. Sunt architecto repudiandae itaque quia eius ullam iusto laudantium nemo!
            </h2>
            <h2>Projects</h2>
            <h2>Contact Me</h2>
        </div>
    );
}
