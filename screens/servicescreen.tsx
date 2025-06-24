import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, Image, Text } from "@/components/Restyle";
import Pressable from "@/components/Restyle/Pressable";
import Icon from "@/assets/icons/Icon";
import theme from "@/constants/colors";
import { services, specialties } from "@/constants/mockData";

import { Icon as Iconx } from "react-native-paper";


const ServicePage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <Box height="100%" backgroundColor="white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Box
          flexDirection="row"
          alignItems="center"
          px="md"
          py="sm"
          bg="white"
          borderBottomWidth={0.5}
          borderColor="grey"
        >
          <Pressable>
            <Icon name="arrowLeft" size={24} color="primary" />
          </Pressable>
          <Box flex={1} alignItems="center">
            <Text variant="bold12" color="primary">
              Our Services
            </Text>
          </Box>
          <Box width={24} />
        </Box>

        <Box px="md" py="lg">
          {/* Hero Section */}
          <Box alignItems="center" mb="xl">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80",
              }}
              width="100%"
              height={180}
              borderRadius={16}
              resizeMode="cover"
            />
            <Text
              variant="bold12"
              color="primary"
              mt="md"
              textAlign="center"
              fontWeight="700"
            >
              Comprehensive Healthcare Services
            </Text>
            <Text variant="medium14" color="black" textAlign="center" mt="sm">
              Discover our range of healthcare services designed to meet your
              unique needs and improve your overall well-being.
            </Text>
          </Box>

          {/* Services Section */}
          <Box mb="xl">
            <Text variant="medium16" color="primary" fontWeight="700" mb="lg">
              Our Core Services
            </Text>

            {services.map((service, index) => (
              <Box
                key={service.id}
                mb="lg"
                bg="white"
                borderRadius={16}
                shadowOpacity={0.08}
                shadowRadius={12}
                shadowColor="black"
                shadowOffset={{ width: 0, height: 4 }}
                overflow="hidden"
              >
                <Image
                  source={{ uri: service.image }}
                  width="100%"
                  height={140}
                  resizeMode="cover"
                />

                <Box p="md">
                  <Box flexDirection="row" alignItems="center" mb="sm">
                    <Box
                      bg="primary"
                      width={36}
                      height={36}
                      borderRadius={18}
                      alignItems="center"
                      justifyContent="center"
                      mr="sm"
                    >
                      <Iconx
                        source={service.icon as any}
                        size={18}
                        color="white"
                      />
                      {/* <Text fontSize={24}>{service.icon}</Text> */}
                    </Box>
                    <Box flex={1}>
                      <Text variant="medium16" color="primary" fontWeight="700">
                        {service.title}
                      </Text>
                      <Text variant="medium14" color="textTint">
                        {service.price}
                      </Text>
                    </Box>
                  </Box>

                  <Text variant="regular12" color="black" mb="md">
                    {service.description}
                  </Text>

                  <Box mb="md">
                    <Text
                      variant="medium14"
                      color="primary"
                      fontWeight="600"
                      mb="xs"
                    >
                      Key Features:
                    </Text>
                    <Box flexDirection="row" flexWrap="wrap" gap="xs">
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          bg="grey"
                          borderRadius={6}
                          px="sm"
                          py="xs"
                          flexDirection="row"
                          alignItems="center"
                          gap="xs"
                        >
                          <Icon name="check" size={12} color="primary" />
                          <Text variant="medium14" color="black">
                            {feature}
                          </Text>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Pressable
                    backgroundColor="primary"
                    borderRadius={8}
                    py="sm"
                    alignItems="center"
                    justifyContent="center"
                    onPress={() => setSelectedService(service.id)}
                  >
                    <Text color="white" variant="medium14" fontWeight="600">
                      Learn More
                    </Text>
                  </Pressable>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Specialties Section */}
          <Box mb="xl">
            <Text variant="medium16" color="primary" fontWeight="700" mb="md">
              Medical Specialties
            </Text>
            <Text variant="regular12" color="black" mb="lg">
              Our network includes specialists across various medical fields to
              provide comprehensive care.
            </Text>

            <Box
              flexDirection="row"
              flexWrap="wrap"
              gap="md"
              justifyContent="space-between"
            >
              {specialties.map((specialty, index) => (
                <Box
                  key={index}
                  width="30%"
                  bg="grey"
                  borderRadius={12}
                  alignItems="center"
                  py="md"
                  px="xs"
                >
                  <Box
                    bg="primary"
                    width={40}
                    height={40}
                    borderRadius={20}
                    alignItems="center"
                    justifyContent="center"
                    mb="sm"
                  >
                    {/* <Icon
                      name={specialty.icon as any}
                      size={20}
                      color="white"
                    /> */}

                    <Text fontSize={24}>{specialty.icon}</Text>
                  </Box>
                  <Text
                    variant="medium14"
                    color="black"
                    textAlign="center"
                    fontWeight="600"
                  >
                    {specialty.name}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          {/* How It Works Section */}
          <Box mb="xl">
            <Text variant="medium16" color="primary" fontWeight="700" mb="md">
              How It Works
            </Text>

            {[
              {
                step: "1",
                title: "Sign Up & Complete Profile",
                description:
                  "Create your account and provide your health information for personalized care.",
              },
              {
                step: "2",
                title: "Choose Your Service",
                description:
                  "Select from our range of healthcare services that best fit your needs.",
              },
              {
                step: "3",
                title: "Connect with Providers",
                description:
                  "Get matched with qualified healthcare professionals in your area or virtually.",
              },
              {
                step: "4",
                title: "Receive Care & Monitor Progress",
                description:
                  "Access your care plan, track your health metrics, and stay connected with your care team.",
              },
            ].map((item, index) => (
              <Box
                key={index}
                flexDirection="row"
                alignItems="flex-start"
                mb="lg"
                bg="white"
                borderRadius={12}
                p="md"
                shadowOpacity={0.05}
                shadowRadius={8}
                shadowColor="black"
                shadowOffset={{ width: 0, height: 2 }}
              >
                <Box
                  bg="primary"
                  width={32}
                  height={32}
                  borderRadius={16}
                  alignItems="center"
                  justifyContent="center"
                  mr="md"
                  mt="xs"
                >
                  <Text color="white" variant="medium14" fontWeight="700">
                    {item.step}
                  </Text>
                </Box>
                <Box flex={1}>
                  <Text
                    variant="medium14"
                    color="primary"
                    fontWeight="700"
                    mb="xs"
                  >
                    {item.title}
                  </Text>
                  <Text variant="regular12" color="black">
                    {item.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>

          {/* CTA Section */}
          <Box
            bg="primary"
            borderRadius={16}
            p="lg"
            alignItems="center"
            mb="lg"
          >
            <Text
              variant="medium16"
              color="white"
              fontWeight="700"
              textAlign="center"
              mb="sm"
            >
              Ready to Get Started?
            </Text>
            <Text
              variant="regular12"
              color="white"
              textAlign="center"
              mb="lg"
              opacity={0.9}
            >
              Join thousands of patients who trust iHealth for their healthcare
              needs.
            </Text>
            <Pressable
              backgroundColor="white"
              borderRadius={8}
              px="xl"
              py="md"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="primary" variant="medium14" fontWeight="700">
                Book Consultation
              </Text>
            </Pressable>
          </Box>

          {/* Contact Section */}
          <Box alignItems="center">
            <Text variant="medium14" color="black" textAlign="center" mb="sm">
              Have questions about our services?
            </Text>
            <Pressable
              flexDirection="row"
              alignItems="center"
              gap="xs"
              onPress={() => {}}
            >
              <Icon name="service_active" size={16} color="primary" />
              <Text variant="medium14" color="primary" fontWeight="600">
                Contact Support
              </Text>
            </Pressable>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ServicePage;
