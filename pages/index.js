import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import randomColor from 'random-hex-color'
import { Cardo  as Font } from 'next/font/google'
import { randomInt } from '../lib/random'
import EnchantedBookCover from '../components/book-cover-enchanted-map'
import EnchantedBookCover2 from '../components/book-cover-2'


const font = Font({ weight: '400', subsets: ['latin'] })

export default function Home() {

  // Book 1 & 2
  const [bgColor, setBgColor] = useState( 'rgba('+randomInt(0,255)+',128, 128,1)')
  const [bgColor2, setBgColor2] = useState(randomColor())
  const [maxLimit, setMaxLimit] = useState(randomInt(50,150))
  const [strokeWidth, setStrokeWidth] = useState(randomInt(4,32))

  const regenerateClick = () => {
    setBgColor( 'rgba('+randomInt(0,255)+',128, 128,1)')
    setBgColor2(randomColor())
    setMaxLimit(randomInt(50,150))
    setStrokeWidth(randomInt(4,16))
  }

  return (
    <>
      <Head>
        <title>Generative Choose Your Own Adventure</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        <header className='header'>
          <h1 className='book-title'>The Generative Enigma: A Castle of Creative Conundrums</h1>
        </header>
        <article className='chapter' style={{ paddingBottom: '256px' }}>
          <header>
            <h2 className='chapter-number'>Chapter 1</h2>       
            <h3 className='chapter-title'>The Storm</h3>       
          </header>
<p>
  You can&apos;t say the train conductor didn&apos;t warn you.
</p> 
<p>
  &quot;It&apos;s going to be the storm of the century they say. Maybe the worst in a thousand years.&quot;
</p>
<p>
  It was hardly drizzling when you left the station and walking hadn&apos;t seemed like the worst idea at the time. But now you&apos;re starting to think you had made a mistake. The light drizzle had turned into a downpour and you were getting soaked. 

You pull your jacket closer around you. &quot;This is ridiculous,&quot; you mutter, &quot;I can&apos;t believe I brought an umbrella instead of a boat&quot;


That&apos;s when you spotted the old bookshop, tucked away in a corner of the village. The lights were on, and through the rain-streaked windows, you could see the shadowy outline of the bookshelves and the flickering flames of a fireplace. Without a second thought, you pushed open the door and stepped inside.
The air inside was musty and thick with the smell of old books, but it was warm and inviting, a welcome relief from the raging storm outside. You shook yourself like a wet dog, sending droplets of water flying in all directions.
&quot;Goodness gracious me, what a sight!&quot; The voice came from behind a counter, and you turned to see an old woman peering at you through thick spectacles. She was small and plump, with a mass of gray hair tied up in a bun.
&quot;Sorry,&quot; you said, feeling embarrassed. &quot;I didn&apos;t mean to make a mess.&quot;
&quot;Nonsense,&quot; the woman said, her eyes twinkling. &quot;A bit of water never hurt anyone. Now come closer, my dear, and let me get a good look at you.&quot;
You approached the counter, and the woman studied you intently. &quot;You&apos;re not from around here, are you?&quot;
&quot;Can I help you with something?&quot; she asked, her eyes roving over the shelves behind her.
&quot;I was just looking for a place to wait out the storm,&quot; you said. &quot;I don&apos;t want to be caught out in it.&quot;
&quot;Ah, well, you&apos;ve come to the right place,&quot; she said, reaching under the counter and pulling out a thick woolen blanket. &quot;Wrap yourself up in this and make yourself comfortable. I&apos;ll put the kettle on and we can have a cup of tea while we wait for the storm to pass.&quot;
You couldn&apos;t help but feel grateful for the woman&apos;s kindness. As you settled into a cozy armchair by the fire, she bustled about, making tea and bringing out plates of biscuits. You felt a sense of peace settle over you, and for a moment, the raging storm outside seemed like a world away.
As you sipped your tea and nibbled on a biscuit, the old woman began to chat away, telling you all sorts of stories and anecdotes about the village and its inhabitants. You listened with rapt attention, fascinated by her colorful descriptions of the local characters and their exploits.
    </p>


<p>
  &quot;I&apos;ve always found books to be the best companions in times like these. &quot;
</p>

  <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1em' }} onClick={(e) => regenerateClick()}>
    <div>
      <EnchantedBookCover strokeWidth={strokeWidth} bgColor={bgColor} maxLimit={maxLimit} />
      <a style={{ display: 'block', padding: '8px 0', fontSize: '18px' }} href='#'>Take this book</a>
    </div>
    <div>
      <EnchantedBookCover2 maxLimit={maxLimit} strokeWidth={strokeWidth} bgColor={bgColor} />
      <a style={{ display: 'block', padding: '8px 0', fontSize: '18px' }} href='#'>Take this book</a>
    </div>
  </section>


<div style={{display: 'none'}}>
Hello there, dear,&quot; the old woman behind the counter says, her eyes twinkling with amusement. &quot;What brings you out in this dreadful weather?&quot;
&quot;My aunt&apos;s house is just up the road, and I didn&apos;t think the weather would be this bad,&quot; you reply.
The old woman nods sympathetically. &quot;I know, dear. It&apos;s the storm of the century. But don&apos;t worry, you&apos;re safe here. Now, let me take your coat and dry it by the fire. And while you&apos;re here, would you like to browse some books? I have quite the selection.&quot;
As you browse through the shelves, you can&apos;t help but notice the odd assortment of books. Some are old and tattered, while others seem to have been recently added. One book in particular catches your eye, a thick leather-bound tome with strange symbols etch

You slip and slide, struggling to keep your footing

&quot;Easy there,&quot; a voice says from the shadows. &quot;I&apos;m not here to hurt you.&quot; You squint into the darkness, trying to make out the stranger&apos;s face. &quot;I&apos;m just looking for some shelter from this damned storm.&quot;

The old woman handed you the second book and pointed towards the back of the store. &quot;Take this path,&quot; she said, &quot;and follow it through the woods. It will lead you to where you need to go.&quot;
You hesitated for a moment, but the storm outside was raging, and you had nowhere else to go. You took the book and followed the old woman&apos;s instructions. The path was narrow, the trees bending under the weight of the rain, but you could see just enough to keep moving forward.

It&apos;s pouring down rain as you make your way towards your Aunt&apos;s house. The weather is so terrible that you can barely see two feet in front of you. You pull your coat closer to your body, wishing you had listened to your mother and brought an umbrella.
As you walk, you notice a small, cozy bookstore on the corner of the street. The sign above the door reads &quot;Belladonna&apos;s Books.&quot; You decide to take refuge from the storm inside.

Here&apos;s an expanded version as Shel Silverstein:
You could tell it was going to be a big one from the way the sky was growling and the trees were swaying.

You were startled by the sound of a voice behind you. &quot;Can I help you with anything?&quot; you turned to see an old woman peering at you curiously. Her eyes were bright and her smile was warm, but you sensed there was something unusual about her. &quot;I&apos;m just looking,&quot; you replied, trying to hide your curiosity.

&quot;My mother used to always say that the secret to a good pie is a dash of cinnamon&quot;




&quot;Welcome, dear,&quot; a voice calls from the back of the store. You make your way down the narrow aisle and find an elderly woman seated behind a counter, surrounded by stacks of books and various trinkets. &quot;The storm has caught you, hasn&apos;t it?&quot;

&quot;I&apos;ve always found books to be the best companions in times like these.&quot;



You meander through the store, running your fingers over the spines of books, pausing to read the titles and descriptions. As you reach the back of the store, your attention is drawn to a small section of books that appear older and more mysterious than the others. You reach out to take one of the books from the shelf, but before you can, the woman&apos;s voice interrupts you.
&quot;Ah, those books are not for sale,&quot; she says, her eyes meeting yours. &quot;They are special. They hold secrets and stories that are not meant for just anyone.&quot;
Intrigued, you ask her about the books. She leans in conspiratorially and tells you that they are books of magic and mystery, books that hold the power to transport the reader to other worlds and times. She tells you that she has lived a long life, and that she has been the keeper of these books for as long as she can remember.


The old woman raises an eyebrow. &quot;You never know, dear. The storm has a way of bringing out the magic in things.&quot;
You&apos;re not sure what she means by that, but you shrug it off and continue browsing. You&apos;re just about to leave when the old woman hands you two books.

The old woman directs you to a narrow, winding path that leads through the forest. She tells you that it&apos;s a shortcut to your aunt&apos;s house, but warns you to be careful as the trail can be treacherous, especially in bad weather. She hands you a sturdy walking stick and tells you that it might come in handy.
You set out down the path, the sound of raindrops pattering against the leaves overhead. The air is thick with the scent of damp earth and pine needles. As you round a bend in the trail, you see a figure up ahead, huddled under a tree. It&apos;s a young girl, no more than ten years old, and she&apos;s shivering in her soaking wet clothes.
You ask the girl if she needs help, and she nods gratefully. She tells you that she was out playing in the woods when the storm hit, and she got separated from her family. You offer her your coat and the two of you set out together, the walking stick thudding against the muddy ground as you make your way deeper into the forest.


As you make your way down the winding path, you hear the sound of rushing water in the distance. You follow the sound and soon come across a fast-flowing river, swollen with rainwater. There&apos;s no way to cross it, and you&apos;re stranded on the wrong side.
Just when you think all is lost, you hear a voice calling out to you from across the river. It&apos;s a gruff, elderly man with a thick beard and a weather-beaten face. He tells you that he has a small boat that he can use to ferry you across the river, but warns you that the journey will be dangerous. You decide to take your chances, and soon find yourself clinging to the sides of the tiny boat as it bobs and weaves through the rapids.
    </div>
          <footer>

          </footer>
        </article>
        <article className='chapter' style={{display: 'none'}}>
          <header>
            <h2 className='chapter-number'>Chapter 2</h2>       
            <h3 className='chapter-title'>The Enchanted Entrance</h3>       
          </header>

    <p>
A dense fog enveloped the lonely road, as if to obscure the path of any curious traveler. The air hung heavy with an unseen weight, a palpable presence that tingled at the back of the neck, sending shivers down the spine. The silhouette of the castle loomed in the distance, its dark, brooding visage somehow alluring and foreboding simultaneously. Despite the tales and whispered warnings that shrouded this mysterious structure in fear, the intrepid adventurer could not resist the magnetic pull of the unknown.
    </p>
<p>
Upon reaching the castle&apos;s entrance, the traveler noticed the stone walls adorned with intricate carvings, depicting scenes that seemed to dance and shimmer in the dim light of the setting sun. The iron gate groaned in protest as it swung open, revealing a grand foyer bathed in an ethereal glow. The air here was thick with age, the taste of a long-lost past lingering on every breath.
</p>
    <p>
As the traveler ventured deeper into the castle, they were struck by the overwhelming sense of forgotten stories and hidden knowledge waiting to be discovered. The atmosphere of the castle seemed to hum with a creative energy, beckoning the visitor to unlock its secrets.
</p>
    <p>
Before long, the traveler found themselves standing before a massive door, its surface etched with curious patterns and symbols. The designs seemed to writhe and contort before their very eyes, yet somehow, they could discern a single word: &quot;Color.&quot; Instinctively, they reached out to touch the word, and as their fingers made contact, the symbols began to glow, illuminating the room with vibrant hues.
</p>
    <p>
A voice echoed through the chamber, deep and resonant, yet strangely soothing. &quot;To proceed, you must create a work of generative art using the element of color. Choose wisely, for your choice will determine your path through these ancient walls.&quot;
    </p>

Three options lay before the traveler:

Create a vibrant mosaic, harnessing the full spectrum of colors to bring life to an otherwise dull castle room. (Pages 6-9)
Paint a dull landscape, using muted tones and somber shades to reflect the oppressive atmosphere of the castle. (Pages 10-12)
Assemble a monochrome portrait, capturing the essence of the forgotten souls that once dwelled within these walls. (Pages 13-15)
As the traveler pondered their choice, they could not shake the feeling that unseen eyes were watching them, waiting to witness the first step of their journey into the heart of the castle. The weight of the decision bore down on them, and with a deep breath, they made their choice, setting in motion a chain of events that would lead them through the labyrinthine corridors of the castle, each choice forging the path to their ultimate fate.

In the world of the Generative Enigma, the line between reality and imagination was blurred, and the traveler was about to embark on a journey that would challenge their creativity and reshape their understanding of the world. As the haunting melodies of the castle whispered their secrets, the traveler prepared to face the unknown, guided by the creative force that dwelled within these ancient walls.
        </article>
      </main>
    </>
  )
}
