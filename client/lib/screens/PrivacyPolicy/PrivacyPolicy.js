import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const PrivacyPolicy = () => {
  return (
    <>
      <View style={styles.header}>
        <LinearGradient
          colors={['#11185B', '#000000']}
          start={{x: 0.1, y: 0.0}}
          end={{x: 0.1, y: 2.5}}
          style={[
            StyleSheet.absoluteFill,
            {
              height: '100%',
              width: '100%',
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            },
          ]}
        />
        <Text style={styles.title}>PRIVACY POLICY</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.text}>
              Thrival built the Thrival app as [open
              source/free/freemium/ad-supported/commercial] app. This SERVICE is
              provided by Thrival at no cost and is intended for use as is. This
              page is used to inform visitors regarding our policies with the
              collection, use, and disclosure of Personal Information if anyone
              decided to use our Service. If you choose to use our Service, then
              you agree to the collection and use of information in relation to
              this policy. The Personal Information that we collect is used for
              providing and improving the Service. we will not use or share your
              information with anyone except as described in this Privacy
              Policy. The terms used in this Privacy Policy have the same
              meanings as in our Terms and Conditions, which is accessible at
              Thrival unless otherwise defined in this Privacy Policy.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Information Collection and Use</Text>
            <Text style={styles.text}>
              For a better experience, while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to name, address, email
              address, phone number. The information that we request will be
              retained by us and used as described in this privacy policy. The
              app does use third party services that may collect information
              used to identify you. Link to privacy policy of third party
              service providers used by the app Google Play Services.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Log Data</Text>
            <Text style={styles.text}>
              We want to inform you that whenever you use our Service, in a case
              of an error in the app we collect data and information (through
              third party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing our Service, the time and
              date of your use of the Service, and other statistics.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Cookies</Text>
            <Text style={styles.text}>
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device's internal memory. This Service does not use these
              “cookies” explicitly. However, the app may use third party code
              and libraries that use “cookies” to collect information and
              improve their services. You have the option to either accept or
              refuse these cookies and know when a cookie is being sent to your
              device. If you choose to refuse our cookies, you may not be able
              to use some portions of this Service.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Service Providers</Text>
            <Text style={styles.text}>
              We may employ third-party companies and individuals due to the
              following reasons: To facilitate our Service; To provide the
              Service on our behalf; To perform Service-related services; or To
              assist us in analyzing how our Service is used. 2:21 we want to
              inform users of this Service that these third parties have access
              to your Personal Information. The reason is to perform the tasks
              assigned to them on our behalf. However, they are obligated not to
              disclose or use the information for any other purpose.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Security</Text>
            <Text style={styles.text}>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Links to Other Sites</Text>
            <Text style={styles.text}>
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. we have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party
              sites or services.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Children’s Privacy</Text>
            <Text style={styles.text}>
              These Services do not address anyone under the age of 13. we do
              not knowingly collect personally identifiable information from
              children under 13. In the case we discover that a child under 13
              has provided us with personal information, we immediately delete
              this from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact us so that we will be able to do necessary actions.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Changes to This Privacy Policy</Text>
            <Text style={styles.text}>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. we will
              notify you of any changes by posting the new Privacy Policy on
              this page. This policy is effective as of 2020-04-14
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;
