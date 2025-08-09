import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div>
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive mental health services tailored to your unique needs
              and goals.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Individual Therapy",
                description:
                  "One-on-one sessions focused on your personal growth and healing journey.",
                icon: "👤",
                color: "purple",
              },
              {
                title: "Couples Counseling",
                description:
                  "Strengthen relationships through improved communication and understanding.",
                icon: "💕",
                color: "pink",
              },
              {
                title: "Group Therapy",
                description:
                  "Connect with others facing similar challenges in a supportive environment.",
                icon: "👥",
                color: "blue",
              },
              {
                title: "Mindfulness Training",
                description:
                  "Learn meditation and mindfulness techniques for stress reduction.",
                icon: "🧘",
                color: "green",
              },
              {
                title: "Anxiety Treatment",
                description:
                  "Specialized approaches to manage and overcome anxiety disorders.",
                icon: "🌱",
                color: "teal",
              },
              {
                title: "Depression Support",
                description:
                  "Comprehensive treatment plans for depression and mood disorders.",
                icon: "☀️",
                color: "orange",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-4xl mb-4"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <motion.div whileHover={{ x: 5 }}>
                      <Button
                        variant="outline"
                        className="group-hover:bg-purple-600 group-hover:text-white transition-all bg-transparent"
                      >
                        Learn More
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
