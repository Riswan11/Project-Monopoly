import React from 'react';
import { pages } from "../App";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ResourcesPage.css'

// Cards
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// Images
import racism from './Resource-Pics/racism.jpg'
import incarceration from './Resource-Pics/incarceration.jpg'
import inequity from './Resource-Pics/inequity.png'
import policing from './Resource-Pics/policing.jpg'
import redlining from './Resource-Pics/redlining.jpg'
import systemic from './Resource-Pics/systemic.jpg'
import race from './Resource-Pics/race.jpg'
import racialDiscrimination from './Resource-Pics/racial-discrimination.png'
import bookio from './Resource-Pics/bookIO.jpg'
import bookma from './Resource-Pics/bookMA.jpg'
import bookbs from './Resource-Pics/bookBS.jpg'
import bookcna from './Resource-Pics/bookCNA.jpg'
import bookixk from './Resource-Pics/bookIXK.jpg'
import bookrd from './Resource-Pics/bookRD.jpg'
import booktn from './Resource-Pics/bookTN.jpg'


import baseball from './Resource-Pics/race-place-policy-matter-in-ed-graphic-1.jpg'
import gentrification from './Resource-Pics/gentrification.jpg'
import policing1 from './Resource-Pics/EndOverPolicing_1.png'
import policing2 from './Resource-Pics/EndOverPolicing_2.png'
import policing3 from './Resource-Pics/EndOverPolicing_3.png'
import policing4 from './Resource-Pics/EndOverPolicing_4.png'
import wealthGap from './Resource-Pics/WealthByRace-avg.jpeg'
import prison from './Resource-Pics/prison.jpg'


// Embedded Videos using React
import ReactPlayer from "react-player"


interface ResourcesScreenProps {
  changePage: (page: pages) => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    rootCard: {
      minWidth: 275,
      maxWidth: 350,
  },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        flexBasis: '33.33%',
        flexShrink: 0,
        textAlign: "left",
        padding: '0 30px',
        // backgroundColor: "blue",
    },
    subHeading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      flexShrink: 0,
      textAlign: "left",
      padding: '0 30px',
    },
    // for cards
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
}));
const ResourcesPage = (props: ResourcesScreenProps) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    // closes the current dropdown if you click on another accordion
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    
    return (
        
        <div className={classes.root}>
          <h1 id="resourcesTitle">Resources</h1>
          <h1 id="lineTitle">_____________________</h1>
      {/* Dropdown feature for resources page */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><h1>Key Words</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                {/* Race */}
                <div className="keywords-container">
                  <div className="keyImage">
                    <img src={race} alt="Race Image" height={150} width={250} />
                  </div>
                  <div className="keyDefine">
                    <p><b>Race</b>: The social conception of the grouping of human beings based on shared 
                    physical or social qualities. It has genetic basis or scientific truth; it is purely a social construct.</p>
                  </div>
                </div>
                {/* Racism */}
                <div className="keywords-container">
                  <div className="keyDefine">
                    <p><b>Racism</b>: Prejudice or discrimination directed against a 
                    person or group of people because of their racial  or  ethnic  background. </p>
                  </div>
                  <div className="keyImage">
                    <img src={racism} alt="Racism Image" height={150} width={150} />
                  </div>
                </div>
                {/* Systemic Racism */}
                <div className="keywords-container">
                  <div className="keyImage">
                    <img src={systemic} alt="Systemic Image" height={120} width={270} />
                  </div>
                  <div className="keyDefine">
                    <p><b>Systemic Racism</b>: The structured oppression of black and brown people through 
                    governmental laws, cultural norms, media representation, and other unequal systemic practices. </p>
                  </div>
                </div>
                {/* Inequity */}
                <div className="keywords-container">
                  <div className="keyDefine">
                    <p><b>Inequity</b>: A lack of fairness or justice.</p>
                  </div>
                  <div className="keyImage">
                    <img src={inequity} alt="Inequity Image" height={150} width={150} />
                  </div>
                </div>
                {/* Redlining */}
                <div className="keywords-container">
                  <div className="keyImage">
                    <img src={redlining} alt="Redlining Image" height={180} width={180} />
                  </div>
                  <div className="keyDefine">
                    <p><b>Redlining</b>: A discriminatory practice that denies or limits services 
                    and access to public or private investments to entire neighborhoods based on 
                    race or ethnicity through the raising of prices. </p>
                  </div>
                </div>
                {/* Inequitable Policing */}
                <div className="keywords-container">
                  <div className="keyDefine">
                    <p><b>Over Policing</b>: Over-policing is based on the concept of 
                    ‘broken windows,’ the premise that if you deploy officers in areas where 
                    the most crime is committed, they will prevent more crimes</p>
                  </div>
                  <div className="keyImage">
                    <img src={policing} alt="Policing Image" height={150} width={150} />
                  </div>
                </div>
                {/* Mass Incarceration */}
                <div className="keywords-container">
                  <div className="keyImage">
                    <img src={incarceration} alt="incarceration Image" height={120} width={220} />
                  </div>
                  <div className="keyDefine">
                    <p><b>Mass Incarceration</b>: this phenpmenon refers to the extreme rates in which people are 
                    imprisonment in the United States, most specifically African American men.</p>
                  </div>
                </div>
            </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 2 : Race | DONE */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><b>Race</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="infoBeforeCard">
                <p id="watchVideo"><b>Read this Infogrpahic!</b></p>
                <br/>
                <img src={racialDiscrimination} alt="Racial Discrimination Infographic" height={2514} width={500}/>
                <br/>
                </div>
                  {/* Cards with content (definitions) */}
                  <div className="card-container">
                  <div id="card">
                  <Card className={classes.rootCard}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Race 
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        Definition
                      </Typography>
                      <Typography className="cardDefinition"variant="body2" component="p">
                      Race has no genetic basis; it has no biological or scientific truth. It 
                      is a social construct that legitimizes the dominance of white people over 
                      People of Color.    
                        <br />
                      </Typography>
                    </CardContent>
                  </Card>
                  </div>
                </div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography></Typography>
                    <Typography className={classes.subHeading}><b>Learn More About Race</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="moreLinks">
                          <a href={"https://www.nytimes.com/roomfordebate/2015/06/16/how-fluid-is-racial-identity/race-and-racial-identity-are-social-constructs#:~:text=Race%20is%20not%20biological.,would%20remain%20constant%20across%20boundaries."}>Race and Racial Identitiy: Social Constructs</a>
                          <br/><a href={"https://www.facinghistory.org/resource-library/teaching-holocaust-and-human-behavior/concept-race"}>The Concept of Race</a>
                          <br/><a href={"https://www.theatlantic.com/national/archive/2013/05/what-we-mean-when-we-say-race-is-a-social-construct/275872/"}>Historical Context of Race</a>
                          <br/><br/>
                          <b><u>Literature to Read</u></b>
                          <br/><br/>
                          <p className="bookTitle"><b>"So You Want to Talk About Race" by Ijeoma Oluo</b></p>
                          <div className="book-container">
                            <div className="bookImage">
                            <a href={"https://www.amazon.com/You-Want-Talk-About-Race/dp/1580056776/ref=as_li_ss_tl?&linkCode=ll1&tag=newsroom_affiliate_060820_books-white-privilege-20&linkId=20b78171e8c509b32c3e646f2aba9334&language=en_US"}>
                            <img src={bookio} alt="Ijeoma Olu" height={280} width={190}></img></a>
                            </div>
                            <div className="bookSummary">
                            <p>In this bestseller, Seattle-based writer Ijeoma Oluo prompts people of 
                            all races to start having honest conversations about race, giving readers 
                            handy phrases and questions to start unpacking racism within their own 
                            social networks. She tackles subjects ranging from intersectionality to 
                            microaggressions, or subtly racist remarks or actions. </p>
                            </div>
                          </div>
                           
                          <p className="bookTitle"><b>"Americanah" by Chimamanda Ngozi Adichie</b></p>
                          <div className="book-container">
                            <div className="bookSummary">
                              <p>Ifemelu and Obinze are young and in love when they depart military-ruled 
                              Nigeria for the West. Beautiful, self-assured Ifemelu heads for America, 
                              where despite her academic success, she is forced to grapple with what it 
                              means to be black for the first time. Quiet, thoughtful Obinze had hoped to 
                              join her, but with post-9/11 America closed to him, he instead plunges into 
                              a dangerous, undocumented life in London. Fifteen years later, they reunite 
                              in a newly democratic Nigeria, and reignite their passion—for each other and 
                              for their homeland. </p>
                            </div>
                            <div className="bookImage">
                              <a href={"https://www.amazon.com/Americanah-Chimamanda-Ngozi-Adichie/dp/0307455920/ref=as_li_ss_tl?crid=NIXEIHZWM2GN&dchild=1&keywords=americanah+by+chimamanda+ngozi+adichie+book&qid=1591371313&sprefix=americanah,aps,150&sr=8-1&linkCode=sl1&tag=westaway0a-20&linkId=7ce706c93a4d95c9a9a348ed319b22e8&language=en_US"}>
                              <img src={bookcna} alt="Chimamanda Ngozi Adichie" height={280} width={190}></img></a>
                            </div>
                          </div>
                          
                          <p className="bookTitle"><b>"Born a Crime : Stories from a South African Childhood" by Trevor Noah</b></p>
                          <div className="book-container">
                            <div className="bookImage">
                              <a href={"https://www.amazon.com/Born-Crime-Stories-African-Childhood/dp/052550902X/ref=as_li_ss_tl?keywords=born+a+crime&qid=1576932624&sr=8-3&linkCode=sl1&tag=westaway0a-20&linkId=6aacc51847beb6a3d85f8135f4690c06&language=en_US"}>
                              <img src={booktn} alt="Trevor Noah" height={280} width={190}></img></a>
                            </div>
                            <div className="bookSummary">
                              <p>Trevor Noah’s unlikely path from apartheid South Africa to the desk of The 
                                Daily Show began with a criminal act: his birth. Trevor was born to a white 
                                Swiss father and a black Xhosa mother at a time when such a union was punishable 
                                by five years in prison. Living proof of his parents’ indiscretion, Trevor was 
                                kept mostly indoors for the earliest years of his life, bound by the extreme and 
                                often absurd measures his mother took to hide him from a government that could, 
                                at any moment, steal him away. Born a Crime is the story of a mischievous young 
                                boy who grows into a restless young man as he struggles to find himself in a world 
                                where he was never supposed to exist.</p>
                            </div>
                          </div>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 3 : Racism | DONE */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}><b>Racism</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="infoBeforeCard">
                <p id="watchVideo"><b>Watch Video</b></p>
                <br/>
                {/* Racism Video */}
                <ReactPlayer className="videoDisplay" url="https://youtu.be/caarVAS40jQ"/>
                <br/>
                <Typography id="cardFact"><b>Quick Fact:</b>Black students are three times more likely to be suspended than white students, even when their infractions are similar.<a href ={"https://www.benjerry.com/whats-new/2016/systemic-racism-is-real"}>Source</a> </Typography>
                </div>
                  {/* Cards with content (definitions) */}
                  <div className="card-container">
                  <div id="card">
                  <Card className={classes.rootCard}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Racism
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                      Definition 
                      </Typography>
                      <Typography className="cardDefinition"variant="body2" component="p">
                        Racism is the belief that different races possess distinct characteristics, 
                        abilities, or qualities, especially so as to distinguish one group as superior 
                        and the other (most specifically those that are minorities or marginalized) 
                        as inferior.  
                        <br />
                      </Typography>
                    </CardContent>
                  </Card>
                  </div>
                </div>
                <div className="card-container">
                  <div id="card">
                  <Card className={classes.rootCard}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Systemic Racism
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                      Definition 
                      </Typography>
                      <Typography className="cardDefinition"variant="body2" component="p">
                        Systemic Racism is the pervasive nature of racism that is embedded as 
                        normal practice within society; its systems and structures have procedures 
                        or processes that disadvantage BIPOC (Black Indigenous People of Color). 
                        <br/><br/>
                        See the following issues: 
                        <ul className="moreLinks">
                          <li>Discrimination in criminal justice</li>
                          <li>Employment</li>
                          <li>Housing</li>
                          <li>Health care</li>
                          <li>Political Power</li>
                          <li>Voting Rights</li>
                          <li>Education</li>
                          <li>More...</li>
                        </ul>

                      </Typography>
                    </CardContent>
                  </Card>
                  </div>
                </div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography></Typography>
                    <Typography className={classes.subHeading}><b>Learn More About Racism</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="moreLinks">
                          <a href={"o	https://www.thenation.com/article/archive/race-best-predicts-whether-you-live-near-pollution/"}>Environmental Racism</a>
                          <br/><a href={"https://kids.kiddle.co/Racism"}>Racism Around the World</a>
                          <br/><a href={"https://www.adl.org/racism"}>What is Systemic Racism?</a>
                          <br/><a href={"https://www.benjerry.com/whats-new/2016/systemic-racism-is-real"}>Systemic Racism and Economic Inequality</a>
                          <br/><br/>
                          <b><u>Literature to Read</u></b>
                          <br/><br/> 
                          <p className="bookTitle"><b>"Stamped From the Beginning: The Definitive History of Racist Ideas in America" by Ibram X. Kendi</b></p>
                          <div className="book-container">
                            <div className="bookImage">
                              <a href={"https://www.amazon.com/Stamped-Beginning-Definitive-History-National/dp/1568585985/ref=as_li_ss_tl?keywords=stamped+from+the+beginning&qid=1576932701&sr=8-3&linkCode=sl1&tag=westaway0a-20&linkId=c933e79a8b704f44b1dd586322ca4daf&language=en_US"}>
                              <img src={bookixk} alt="Ibram X. Kendi" height={280} width={190}></img></a>
                            </div>
                            <div className="bookSummary">
                              <p>The National Book Award winning history of how racist ideas were created, 
                              spread, and deeply rooted in American society. Some Americans insist that 
                              we're living in a post-racial society. But racist thought is not just alive 
                              and well in America—it is more sophisticated and more insidious than ever. 
                              And as award-winning historian Ibram X. Kendi argues, racist ideas have a 
                              long and lingering history, one in which nearly every great American thinker 
                              is complicit. </p>
                            </div>
                          </div>
                          <br/><br/>
                          <p className="bookTitle"><b>"White Fragility: Why It's So Hard for White People to Talk About Racism" by Robin DiAngelo</b></p>
                          <div className="book-container">
                            <div className="bookSummary">
                              <p>In this “vital, necessary, and beautiful book” (Michael Eric Dyson), antiracist 
                              educator Robin DiAngelo deftly illuminates the phenomenon of white fragility and 
                              “allows us to understand racism as a practice not restricted to ‘bad people’ 
                              (Claudia Rankine). Referring to the defensive moves that white people make when 
                              challenged racially, white fragility is characterized by emotions such as anger, 
                              fear, and guilt, and by behaviors including argumentation and silence. </p>
                              </div>
                            <div className="bookImage">
                              <a href={"https://www.amazon.com/White-Fragility-People-About-Racism/dp/0807047414/ref=as_li_ss_tl?crid=2GZHQRL8TH7GW&keywords=white+fragility&qid=1576933092&sprefix=white+frag,aps,219&sr=8-1&linkCode=sl1&tag=westaway0a-20&linkId=24568448375bdf2ccec4dac61be2cf4d&language=en_US"}>
                              <img src={bookrd} alt="Robin DiAngelo" height={280} width={190}></img></a>
                            </div>
                          </div>
                         
                        </Typography>
                    </AccordionDetails>
                </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 4 : Inequity */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}><b>Inequity</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="infoBeforeCard">
            <img src={baseball} alt="Equality vs Equity" height={300} width={500}></img>
              <p id="watchVideo"><b>Watch Video</b></p>
              <br/>
              {/* Inequity Video */}
              <ReactPlayer className="videoDisplay" url="https://youtu.be/2KlmvmuxzYE"/>
              <br/>
              <Typography id="cardFact"><b>Quick Fact:</b> <a href ={"https://google.com"}>Source</a> </Typography>
              </div>
                {/* Cards with content (definitions) */}
                <div className="card-container">
                <div id="card">
                <Card className={classes.rootCard}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      In the context of the game:
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Inequity 
                    </Typography>
                    <Typography className="cardDefinition"variant="body2" component="p">
                    Why do the Stars players have more advantages than the Stripes players 
                    (more money, more opportunities to buy property and stay out of jail, etc.)? 
                    This might seem unfair to you; this is called inequity. 
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
                </div>
                <div id="card">
                <Card className={classes.rootCard}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      In the context of real life:
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Inequity 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Definition
                    </Typography>
                    <Typography className="cardDefinition"variant="body2" component="p">
                      Inequity is a lack of fairness or justice. 
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
                </div>
              </div>
              <Accordion>
                  <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography></Typography>
                  <Typography className={classes.subHeading}><b>Learn More About Inequity</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography className="moreLinks">
                        <a href={"https://endhomelessness.org/homelessness-in-america/what-causes-homelessness/inequality/"}>Racial Inequity in Homelessness</a>
                        <br/><a href={"https://www.nytimes.com/interactive/2020/07/05/us/coronavirus-latinos-african-americans-cdc-data.html"}>Racial Inequity of Coronavirus</a>
                        <br/><br/>
                        <b><u>Literature to Read</u></b>
                          <br/><br/>
                          <p className="bookTitle"><b>"The New Jim Crow: Mass Incarceration In The Age of Colorblindness" by Michelle Alexandero</b></p>
                          <div className="book-container">
                            <div className="bookImage">
                            <a href={"https://go.skimresources.com/?id=35871X943606&isjs=1&jv=14.2.0-stackpath&sref=https%3A%2F%2Fwww.businessinsider.com%2Fbooks-white-privilege-novels-racism-antiracism-black-scholars-2020-6%23the-new-jim-crow-mass-incarceration-in-the-age-of-colorblindness-by-michelle-alexander-2&url=https%3A%2F%2Fwww.amazon.com%2FNew-Jim-Crow-Incarceration-Colorblindness%2Fdp%2F1595586431%2Fref%3Das_li_ss_tl%3F%26linkCode%3Dll1%26tag%3Dnewsroom_affiliate_060820_books-white-privilege-20%26linkId%3D8258d704517f76ecd95f0feeec5c2d05%26language%3Den_US&xguid=17de2999ead366adbc462358e22bb24d&xs=1&xtz=300&xuuid=4d568e1f5e43b2065ac4291d2f84a65c&xjsf=other_click__contextmenu%20%5B2%5D"}>
                              <img src={bookma} alt="Michelle Alexander" height={280} width={190}></img></a>
                            </div>
                            <div className="bookSummary">
                              <p>In "The New Jim Crow," legal scholar Michelle Alexander argues that 
                              "we have not ended racial caste in America; we have merely redesigned 
                              it." Jim Crow laws were state and local laws created in the late 1800s 
                              and early 1900s that enforced racial segregation and encouraged the 
                              disenfranchisement of black people in the US. </p>
                            </div>
                          </div>
                           
                      </Typography>
                  </AccordionDetails>
              </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 5 : Redlining | DONE */}
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}><b>Redlining</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="infoBeforeCard">
            <p id="watchVideo"><b>Watch Video</b></p>
            <br/>
            {/* Redlining Video */}
            <ReactPlayer className="videoDisplay" url="https://youtu.be/SNH6kTHdUlI"/>
            <br/>
            <Typography id="cardFact"><b>Quick Fact:</b> Real estate app Redfin declared that Black 
            families have lost out on at least $212,000 in personal wealth over the 
            last 40 years because their home was redlined. <a href ={"https://www.cbsnews.com/news/redlining-what-is-history-mike-bloomberg-comments/"}>Source</a> </Typography>
            </div>
              {/* Cards with content (definitions) */}
              <div className="card-container">
              <div id="card">
              <Card className={classes.rootCard}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    In the context of the game:
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Redlining 
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    (Red Zone)
                  </Typography>
                  <Typography className="cardDefinition"variant="body2" component="p">
                  The disadvantaged team (Stripes) was ineligible to buy property in specific 
                  areas because the bank refused to loan them money.
                    <br />
                  </Typography>
                </CardContent>
              </Card>
              </div>
              <div id="card">
              <Card className={classes.rootCard}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    In the context of real life:
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Redlining 
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Definition
                  </Typography>
                  <Typography className="cardDefinition"variant="body2" component="p">
                  Redlining is an unethical practice that puts services (financial and otherwise) out of 
                  reach for residents of certain areas based on race or ethnicity; in this case, 
                  many banks in the U.S. denied mortgages to mostly People of Color in urban areas. 
                    <br />
                  </Typography>
                </CardContent>
              </Card>
              </div>
            </div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography></Typography>
                <Typography className={classes.subHeading}><b>Learn More About Redlining</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="moreLinks">
                      <a href={"https://www.thoughtco.com/redlining-definition-4157858"}>History of Redlining</a>
                      <br/><a href={"https://www.washingtonpost.com/news/wonk/wp/2018/03/28/redlining-was-banned-50-years-ago-its-still-hurting-minorities-today/"}>Effects of Redlining Today</a>
                      <br/><a href={"https://www.brookings.edu/research/devaluation-of-assets-in-black-neighborhoods/"}>Devaluation of Assets in Black Neighborhoods</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 6 : Gentrification */}
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}><b>Gentrification</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="infoBeforeCard">
              <p id="watchVideo"><b>Watch Video</b></p>
              <br/>
              {/* Gentrification Video */}
              <ReactPlayer className="videoDisplay" url="https://youtu.be/V0zAvlmzDFc"/>
              <br/><br/>
              <img src={gentrification} alt="Gentrification"></img>
              <br/><br/>
              <Typography id="cardFact"><b>Quick Fact:</b> Nearly 20 percent of neighborhoods with lower incomes and home values have experienced gentrification since 2000, compared to only 9 percent during the 1990s.
                <a href ={"https://www.governing.com/gov-data/census/gentrification-in-cities-governing-report.html#:~:text=Nearly%2020%20percent%20of%20neighborhoods,gentrification%20since%20the%202000%20Census."}> Source</a> </Typography>
              </div>
                {/* Cards with content (definitions) */}
                <div className="card-container">
                <div id="card">
                <Card className={classes.rootCard}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      In the context of the game:
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Gentrification 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      (Yellow Zone)
                    </Typography>
                    <Typography className="cardDefinition"variant="body2" component="p">
                    The disadvantaged team (Stripes) was ineligible to buy property in 
                    specific areas because the neighborhood was renovated to produce an influx 
                    of more affluent residents and businesses; this spiked the price of propety 
                    in this area, leading to Stripes players being unable to afford this property. 
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
                </div>
                <div id="card">
                <Card className={classes.rootCard}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      In the context of real life:
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Gentrification 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Definition
                    </Typography>
                    <Typography className="cardDefinition"variant="body2" component="p">
                    Gentrification is the process of altering deteriorated urban neighborhoods through 
                    the buying and renovation of houses and stores by upper—or middle—income families 
                    or individuals; this raises property values but often displaces low-income families 
                    and small businesses since they can’t afford to reside here anymore.  
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
                </div>
              </div>
              <Accordion>
                  <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography></Typography>
                  <Typography className={classes.subHeading}><b>Learn More About Gentrification</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography className="moreLinks">
                        <a href={"https://www.theatlantic.com/politics/archive/2015/09/this-is-what-happens-after-a-neighborhood-gets-gentrified/432813/"}>Effects of Gentrified Neighborhoods</a>
                        <br/><a href={"https://ncrc.org/study-gentrification-and-cultural-displacement-most-intense-in-americas-largest-cities-and-absent-from-many-others/"}>Gentrification And Cultural Displacement</a>
                      </Typography>
                  </AccordionDetails>
              </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 7 : Mass Incarceration */}
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading}><b>Mass Incarceration</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="infoBeforeCard">
                <p id="watchVideo"><b>Read this Infographic!</b></p>
                <img src={prison} alt="Prison" height={700} width={550}></img>
                <p id="watchVideo"><b>Watch Video</b></p>
                <br/>
                {/* Incarceration Video */}
                <ReactPlayer className="videoDisplay" url="https://youtu.be/u51_pzax4M0"/>
                <br/>
                <Typography id="cardFact"><b>Quick Fact:</b> Despite making up close to 5% of the global population, the U.S. has nearly 25% of the world’s prison population. Since 1970, America's incarcerated population has increased by 700% ­­–  2.3 million people in jail and prison today, far outpacing population growth and crime. <a href ={"https://www.aclu.org/issues/smart-justice/mass-incarceration"}>Source</a> </Typography>
                </div>
                  {/* Cards with content (definitions) */}
                  <div className="card-container">
                  <div id="card">
                  <Card className={classes.rootCard}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Mass Incarceration 
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        Definition
                      </Typography>
                      <Typography className="cardDefinition"variant="body2" component="p">
                        Mass Incarceration refers to the extreme rates in which people are 
                        imprisonment in the United States, most specifically African American men. 
                        <br />
                      </Typography>
                    </CardContent>
                  </Card>
                  </div>
                </div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography></Typography>
                    <Typography className={classes.subHeading}><b>Learn More About Mass Incarceration</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="moreLinks">
                          <a href={"https://www.history.com/topics/crime/the-war-on-drugs#:~:text=The%20War%20on%20Drugs%20is,and%20is%20still%20evolving%20today."}>War on Drugs</a>
                          <br/><a href={"https://www.vox.com/2015/7/13/8913297/mass-incarceration-maps-charts"}>Mass Incarceration Explained</a>                          <br/><br/>
                          <b><u>Literature to Read</u></b>
                          <br/><br/> 
                          <p className="bookTitle"><b>"The New Jim Crow: Mass Incarceration In The Age of Colorblindness" by Michelle Alexandero</b></p>
                          <div className="book-container">
                            <div className="bookImage">
                            <a href={"https://go.skimresources.com/?id=35871X943606&isjs=1&jv=14.2.0-stackpath&sref=https%3A%2F%2Fwww.businessinsider.com%2Fbooks-white-privilege-novels-racism-antiracism-black-scholars-2020-6%23the-new-jim-crow-mass-incarceration-in-the-age-of-colorblindness-by-michelle-alexander-2&url=https%3A%2F%2Fwww.amazon.com%2FNew-Jim-Crow-Incarceration-Colorblindness%2Fdp%2F1595586431%2Fref%3Das_li_ss_tl%3F%26linkCode%3Dll1%26tag%3Dnewsroom_affiliate_060820_books-white-privilege-20%26linkId%3D8258d704517f76ecd95f0feeec5c2d05%26language%3Den_US&xguid=17de2999ead366adbc462358e22bb24d&xs=1&xtz=300&xuuid=4d568e1f5e43b2065ac4291d2f84a65c&xjsf=other_click__contextmenu%20%5B2%5D"}>
                              <img src={bookma} alt="Michelle Alexander" height={280} width={190}></img></a>
                            </div>
                            <div className="bookSummary">
                              <p>In "The New Jim Crow," legal scholar Michelle Alexander argues that 
                              "we have not ended racial caste in America; we have merely redesigned 
                              it." Jim Crow laws were state and local laws created in the late 1800s 
                              and early 1900s that enforced racial segregation and encouraged the 
                              disenfranchisement of black people in the US. </p>
                            </div>
                          </div>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 8 : Over Policing*/}
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}><b>Over Policing</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="infoBeforeCard">
              <p id="watchVideo"><b>Read these Infographics!</b></p>
              <br/>
              <img src={policing4} alt="Policing" height={300} width={300}/>
              <img src={policing3} alt="Policing" height={300} width={300}/>
              <img src={policing2} alt="Policing" height={300} width={300}/>
              <img src={policing1} alt="Policing" height={300} width={300}/>
              <br/>
              <Typography id="cardFact"><b>Quick Fact:</b> In a 2019 Center survey, 84% of black adults said that, in dealing with police, Black people are generally treated less fairly than whites; 63% of whites said the same. Similarly, 87% of Black people and 61% of whites said the U.S. criminal justice system treats Black people less fairly.<a href ={"https://www.pewsocialtrends.org/2019/04/09/race-in-america-2019/#majorities-of-black-and-white-adults-say-blacks-are-treated-less-fairly-than-whites-in-dealing-with-police-and-by-the-criminal-justice-system"}> Source</a> </Typography>
              </div>
                {/* Cards with content (definitions) */}
                <div className="card-container">
                <div id="card">
                <Card className={classes.rootCard}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      In the context of the game:
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Over Policing 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      (Free Parking)
                    </Typography>
                    <Typography className="cardDefinition"variant="body2" component="p">
                    The disadvantaged team (Stripes) was arrested for loitering when they landed on 
                    Free Parking; the advantaged team (Stars) was not arrested and instead was allowed to  
                    collect money from the pot.
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
                </div>
                <div id="card">
                <Card className={classes.rootCard}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      In the context of real life:
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Over Policing 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Definition
                    </Typography>
                    <Typography className="cardDefinition"variant="body2" component="p">
                    This is the overpolicing of Black and brown people and communities, 
                    which is predonimantly lower income.
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
                </div>
              </div>
              <Accordion>
                  <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography></Typography>
                  <Typography className={classes.subHeading}><b>Learn More About Over Policing</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography className="moreLinks">
                        <a href={"https://www.huffpost.com/entry/over-policing-of-america_b_4412187"}>Over Policing of America</a>
                        <br/><a href={"https://plsonline.eku.edu/insidelook/brief-history-slavery-and-origins-american-policing"}>History of American Policing</a>
                        <br/><a href={"http://thefirecrackerfoundation.org/how-we-end-over-policing-of-black-children/"}>Overpolicing Black Children</a>
                        <br/><br/>
                        <b><u>Literature to Read</u></b>
                          <br/><br/> 
                          <p className="bookTitle"><b>"Just Mercy" by Bryan Stevenson</b></p>
                          <div className="book-container">
                            <div className="bookImage">
                            <a href={"https://www.amazon.com/Just-Mercy-Story-Justice-Redemption/dp/081298496X?tag=bisafetynet2-20"}>
                              <img src={bookbs} alt="Bryan Stevenson" height={280} width={190}></img></a>
                            </div>
                            <div className="bookSummary">
                              <p>In "Just Mercy," Stevenson tells his incredible story of creating 
                              the Equal Justice Initiative, a legal practice to help those most 
                              desperate and in need, like the wrongly condemned. One of his first 
                              clients was Walter McMillian, a young man sentenced to death for a 
                              murder he said he didn't commit. The story of Stevenson's fight for 
                              justice was turned into a major motion film. </p>
                            </div>
                          </div>
                    
                      </Typography>
                  </AccordionDetails>
              </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 9 : Generational Wealth Gap */}
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography className={classes.heading}><b>Generational Wealth Gap</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="infoBeforeCard">
              <p id="watchVideo"><b>Read this Chart</b></p>
              <br/>
              {/* Redlining Video */}
              <img src={wealthGap} alt="Wealth Gap" height={600} width={1100}></img>
              <br/>
              <Typography id="cardFact"><b>Quick Fact:</b> By 2016, the average wealth of white families ($919,000) was over $700,000 higher than the average wealth of black families ($140,000) and of Hispanic families ($192,000). 
              <a href ={"https://apps.urban.org/features/wealth-inequality-charts/"}>Source</a> </Typography>
              </div>
                {/* Cards with content (definitions) */}
                <div className="card-container">
                <div id="card">
                <Card className={classes.rootCard}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      In the context of the game:
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Generational Wealth Gap 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      (GO)
                    </Typography>
                    <Typography className="cardDefinition"variant="body2" component="p">
                    Why does the advantaged team (Stars) start off with more money in the game?  
                    Why do they collect more in comparison to the Stripes team when they pass "Go"? 
                    The Stars players inherited this wealth from the generations before them. 
                    This is called generational wealth. 
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
                </div>
                <div id="card">
                <Card className={classes.rootCard}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      In the context of real life:
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Generational Wealth Gap 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Definition
                    </Typography>
                    <Typography className="cardDefinition"variant="body2" component="p">
                    Generational Wealth is wealth that is passed down from one generation 
                    to the next. The Generational Wealth Gap is a result of income inequality. 
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
                </div>
              </div>
              <Accordion>
                  <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography></Typography>
                  <Typography className={classes.subHeading}><b>Learn More About the Generational Wealth Gap</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography className="moreLinks">
                        <a href={"https://www.brookings.edu/blog/up-front/2020/02/27/examining-the-black-white-wealth-gap/"}>The Black-white Wealth Gap</a>
                        <br/><a href={"https://www.vox.com/2018/5/23/17377084/racial-wealth-gap-explained-netflix"}>History of Slavery and its Effects in the Racial Wealth Gap</a>
                      </Typography>
                  </AccordionDetails>
              </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Panel 10 : Podcasts to Listen to to Learn More | DONE */}
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography className={classes.heading}><b>Podcasts to Listen to | Learn More</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="moreLinks">
            <p><a href={"https://www.aboutracepodcast.com/"}><b><u>Race</u></b></a> - Reni Eddo-Lodge looks at the recent history that led to the politics of today.</p>
            <p><a href={"https://podcasts.apple.com/us/podcast/intersectionality-matters/id1441348908"}><b><u>Intersectionality Matters</u></b></a> - Hosted by Kimberlé Crenshaw, an American civil rights advocate and a leading scholar of critical race theory.</p>
            <p><a href={"https://www.sceneonradio.org/"}><b><u>Scene on Radio</u></b></a> - Explores human experience and American society.</p>
            <p><a href={"https://www.nytimes.com/2020/01/23/podcasts/1619-podcast.html"}><b><u>1619</u></b></a> - An audio series on how slavery has transformed America, connecting past and present through the oldest form of storytelling.</p>
            <p><a href={"https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6MjA4ODc4Nzcvc291bmRzLnJzcw/episode/dGFnOnNvdW5kY2xvdWQsMjAxMDp0cmFja3MvMzQ2NTk2MzUw?hl=en-NL&ep=6"}><b><u>The End Of Policing</u></b></a> - A conversation with Alex Vitale.</p>
            <p><a href={"https://crooked.com/podcast-series/pod-save-the-people/"}><b><u>Pod Save The People</u></b></a> - Organizer and activist DeRay Mckesson explores news, culture, social justice, and politics with fellow activists.</p>
            <p><a href={"https://www.npr.org/podcasts/510312/codeswitch"}><b><u>Code Switch</u></b></a> - Fearless conversations about race.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <br/>
    </div>
  );
}

export default ResourcesPage;
